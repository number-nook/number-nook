import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberScaleService {

  static readonly SCALE = new Map([
    [2, 'hundred'],
    [3, 'thousand'],
    [6, 'million'],
    [9, 'billion'],
  ]);

  static readonly DECIMAL_PLACE = new Map([
    [0, 'ones'],
    [1, 'tens'],
    [2, 'hundreds'],
    [3, 'thousands'],
    [4, 'ten thousands'],
    [5, 'hundred thousands'],
    [6, 'millions'],
    [7, 'ten millions'],
    [8, 'hundred millions'],
    [9, 'billions'],
    [10, 'ten billions'],
    [11, 'hundred billions'],
  ]);

  constructor() { }

  from(pow: number) {
    return NumberScaleService.SCALE.get(pow);
  }

  decimalPlace(pow: number) {
    return NumberScaleService.DECIMAL_PLACE.get(pow);
  }
}
