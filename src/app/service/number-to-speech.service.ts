import { Injectable } from '@angular/core';
import { Digit } from '../model/digit';
import { NumberScaleService } from './number-scale.service';
import { NumSegment } from '../model/num-segment';
import { NumericalExpression } from '../model/numerical-expression';

@Injectable({
  providedIn: 'root'
})
export class NumberToSpeechService {

  static readonly NUMBER_NAME = new Map([
    [0, ''],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirdteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
  ]);

  static readonly AND = 'and ';

  constructor(
    private numScaleService: NumberScaleService) { }



  convert(digit: Digit): NumericalExpression {
    let ex: NumericalExpression = new NumericalExpression();
    let lastNonempty = false;


    if (!digit.initialized) {
      return ex;
    }

    if (digit.segment!.numSequence.value == 0) {
      ex.numeral = 'zero';
      return ex;
    }

    // only if this segment is the last non empty segment
    lastNonempty = digit.segment?.numSequence.lastNonemptySegment === digit.segment

    let pseudopow: number = this.pseudopow(digit);
    let pseudoscale: string | undefined = this.numScaleService.from(pseudopow);

    // handle conversion in pseudo decimal place (3-digit segment)
    if (pseudopow == 2) {
      // hundred
      if (digit.symbol != 0) {
        ex.setExpression(NumberToSpeechService.NUMBER_NAME.get(digit.symbol)!, pseudoscale!);
      }
      if (digit.before?.initialized && digit.after.isEqualTo(0) && digit.after.after.isEqualTo(0)) {
        // if it has a before segment, and its 2 tail 0
        ex.andable = true && lastNonempty;
      }
    } else if (pseudopow == 1) {
      // tens
      if (digit.symbol >= 2) {
        // for one to ninteen, treat as single number name, skip in tens position and handle in ones position
        ex.cardinal = NumberToSpeechService.NUMBER_NAME.get(digit.symbol * Math.pow(10, pseudopow))!;
        if (digit.before.initialized) {
          ex.andable = true && lastNonempty;
        }
      }
    } else {
      let ten = digit.before?.symbol * 10 + digit.symbol;
      // ones
      if (ten > 0 && ten < 20) {
        // if 1 <= tens < 20, handle as a single number name
        ex.cardinal = NumberToSpeechService.NUMBER_NAME.get(ten)!;
        if (digit.before.before.initialized) {
          ex.andable = true && lastNonempty;
        }
      } else {
        // single number, get it dircetly
        ex.cardinal = NumberToSpeechService.NUMBER_NAME.get(digit.symbol)!;
      }
    }

    // add scale in actual decimal place
    if (!digit.segment?.isLast && !digit.segment?.empty) {
      // if the segment is not last segment, and it is not empty
      let actualScale = this.numScaleService.from(digit.pow);
      if (actualScale) {
        ex.numeral = actualScale;
      }
    }

    return ex;
  }

  // return pseudo decimal place of 3-digit segment
  pseudopow(digit: Digit): number {
    return digit.pow % NumSegment.SIZE;
  }
}
