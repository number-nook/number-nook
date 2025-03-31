import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Digit } from '../../model/digit';
import { NumberScaleService } from '../../service/number-scale.service';

@Component({
  selector: 'number-block',
  imports: [CommonModule],
  templateUrl: './number-block.component.html',
  styleUrl: './number-block.component.scss'
})
export class NumberBlockComponent {

  private static readonly GROUP_OF: number = 10;

  private _puffIndex: number = -1;

  @Input()
  digit: Digit;

  constructor(
    private numScaleService: NumberScaleService) {

  }

  get ten(): number[] {
    return Array.from({ length: NumberBlockComponent.GROUP_OF }, (_, i) => i + 1);
  }

  get base10() {
    return Math.pow(10, this.digit.pow);
  }

  get decimalPlace() {
    let dp = this.numScaleService.decimalPlace(this.digit.pow)?.split(' ') ?? [''];
    if (dp!.length < 2) {
      // assure it takes up 2 lines
      dp?.unshift('');
    }
    return dp!.join('<br />');
  }

  onTap(event: any, i: number) {
    if (this._puffIndex != i) {
      this._puffIndex = i;
    } else {
      this._puffIndex = -1;
    }

  }

  get puffIndex(): number {
    return this._puffIndex;
  }

}
