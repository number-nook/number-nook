import { Component, Input } from '@angular/core';
import { Digit } from '../../model/digit';
import { NumberCardComponent } from '../number-card/number-card.component';
import { NumSequence } from '../../model/num-sequence';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'number-nook',
  imports: [CommonModule, NumberCardComponent],
  templateUrl: './number-nook.component.html',
  styleUrl: './number-nook.component.scss'
})
export class NumberNookComponent {

  static readonly INIT = 0;
  static readonly MIN = 0;
  static readonly MAX = 999999999999;

  private _numSequence: NumSequence;

  constructor() {
    this.integer = NumberNookComponent.INIT;
  }

  onNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let int = parseInt(inputElement.value);

    if (int > NumberNookComponent.MAX || int < NumberNookComponent.MIN) {
      event.preventDefault();
      int =
        Math.max(NumberNookComponent.MIN, Math.min(int, NumberNookComponent.MAX))
      inputElement.value = int + '';
    }

    this.integer = int;
  }

  @Input()
  set integer(int: number) {
    this._numSequence = new NumSequence(Math.trunc(int));
  }

  get numSequence() {
    return this._numSequence;
  }

  get min() {
    return NumberNookComponent.MIN;
  }

  get max() {
    return NumberNookComponent.MAX;
  }

  get init() {
    return NumberNookComponent.INIT;
  }
}
