import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Digit } from '../../model/digit';

@Component({
  selector: 'number-block',
  imports: [CommonModule],
  templateUrl: './number-block.component.html',
  styleUrl: './number-block.component.scss'
})
export class NumberBlockComponent {

  private static readonly GROUP_OF: number = 10;

  @Input() digit: Digit;

  get ten(): number[] {
    return Array.from({ length: NumberBlockComponent.GROUP_OF }, (_, i) => i + 1);
  }

  get base10() {
    return Math.pow(10, this.digit.pow);
  }
}
