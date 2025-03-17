import { Injectable } from '@angular/core';
import { Digit } from '../model/digit';
import { NumberScaleService } from './number-scale.service';

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

  constructor(
    private numScaleService: NumberScaleService) { }

  convert(digit: Digit) {

    let speech: string = '';

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
      if (digit.before?.symbol < 2) {
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
    if (pseudoscale === undefined) {
      let actualScale = this.numScaleService.from(digit.pow);
      if (actualScale !== undefined) {
        speech = `${speech} ${actualScale}`;
      }
    }

    return speech;
  }

  // return pseudo decimal place of 3-digit segment
  pseudopow(digit: Digit): number {
    return digit.pow % 3;
  }
}
