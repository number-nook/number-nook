import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NumberCardComponent } from '../number-card/number-card.component';
import { NumSequence } from '../../model/num-sequence';

@Component({
  selector: 'number-nook',
  imports: [
    CommonModule,
    NumberCardComponent,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './number-nook.component.html',
  styleUrl: './number-nook.component.scss'
})
export class NumberNookComponent {

  static readonly INIT = 0;
  static readonly MIN = 0;
  static readonly MAX = 999999999999;

  private _numSequence: NumSequence;

  private _integer: number;

  @ViewChild('numberInput', { static: false })
  private numberInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.integer = NumberNookComponent.INIT;
  }

  onNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let int = parseInt(0 + inputElement.value);

    if (int > NumberNookComponent.MAX || int < NumberNookComponent.MIN) {
      event.preventDefault();
      int =
        Math.max(NumberNookComponent.MIN, Math.min(int, NumberNookComponent.MAX))

    }

    inputElement.value = int + '';
    this.integer = int;
  }

  @HostListener('click')
  @HostListener('focus')
  onFocus() {
    this.numberInput.nativeElement.focus();
  }

  @Input()
  set integer(int: number) {
    this._integer = int;
    this._numSequence = new NumSequence(Math.trunc(int));
  }

  get integer(): number {
    return this._integer;
  }

  onUpClick() {
    let el = this.numberInput.nativeElement;
    el.value = (Number(el.value) + 1) + '';

    el.dispatchEvent(new Event('input'));
  }

  onDownClick() {
    let el = this.numberInput.nativeElement;
    el.value = (Number(el.value) - 1) + '';

    el.dispatchEvent(new Event('input'));
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
