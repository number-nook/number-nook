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

  private _numSequence: NumSequence;


  @Input()
  set integer(int: number) {

    this._numSequence = new NumSequence(Math.trunc(int));

  }

  get numSequence() {
    return this._numSequence;
  }

}
