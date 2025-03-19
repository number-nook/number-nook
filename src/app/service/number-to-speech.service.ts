import { Injectable } from '@angular/core';
import { Digit } from '../model/digit';
import { NumberScaleService } from './number-scale.service';
import { NumSegment } from '../model/num-segment';

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

  andable(digit: Digit): boolean {
    let andable = false;

    if (!digit.initialized) {
      return andable;
    }

    let pseudopow = this.pseudopow(digit);

    // only if this segment is the last non empty segment
    if (digit.segment?.numSequence.lastNonemptySegment === digit.segment) {

      if (pseudopow == 2) {
        if (digit.after.isEqualTo(0) && digit.after.after.isEqualTo(0) && digit.before?.initialized) {
          andable = true;
        }
      } else if (pseudopow == 1) {
        if (digit.symbol >= 2 && digit.before.initialized) {
          andable = true;
        }
      } else {
        let ten = digit.before?.symbol * 10 + digit.symbol;
        if (ten > 0 && ten < 20) {
          if (digit.before.before.initialized) {
            andable = true;
          }
        }
      }
    }
    return andable;
  }

  convert(digit: Digit) {
    let speech: string = '';

    if (!digit.initialized) {
      return speech;
    }

    if (digit.segment!.numSequence.value == 0) {
      return 'zero';
    }

    let pseudopow: number = this.pseudopow(digit);
    let pseudoscale: string | undefined = this.numScaleService.from(pseudopow);

    // handle conversion in pseudo decimal place (3-digit segment)
    if (pseudopow == 2) {
      // hundred
      if (digit.symbol != 0) {
        speech = NumberToSpeechService.NUMBER_NAME.get(digit.symbol) + ' ' + pseudoscale;
      }
    } else if (pseudopow == 1) {
      // tens
      if (digit.symbol < 2) {
        // one to ninteen treat as single number name, skip in tens position and handle in ones position
        speech = '';
      } else {
        speech = NumberToSpeechService.NUMBER_NAME.get(digit.symbol * Math.pow(10, pseudopow))!;
      }
    } else {
      // ones
      if (digit.before?.symbol < 2 && digit.before?.symbol >= 0) {
        // if tens < 20, handle as a single number name
        let tensPlace: Digit = digit.before;
        let tens: number = tensPlace.symbol * Math.pow(10, this.pseudopow(tensPlace));
        speech = NumberToSpeechService.NUMBER_NAME.get(tens + digit.symbol)!;
      } else {
        // single number, get if dircetly
        speech = NumberToSpeechService.NUMBER_NAME.get(digit.symbol)!;
      }
    }

    // add scale in actual decimal place
    if (!digit.segment?.isLast && !digit.segment?.empty) {
      // if the segment is not last segment, and it is not empty
      let actualScale = this.numScaleService.from(digit.pow);
      speech = `${speech} ${actualScale ?? ''}`;
    }

    return speech;
  }

  // return pseudo decimal place of 3-digit segment
  pseudopow(digit: Digit): number {
    return digit.pow % NumSegment.SIZE;
  }
}
