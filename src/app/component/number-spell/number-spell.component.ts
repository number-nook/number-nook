import { Component, Input } from '@angular/core';
import { Digit } from '../../model/digit';

@Component({
  selector: 'number-spell',
  imports: [],
  templateUrl: './number-spell.component.html',
  styleUrl: './number-spell.component.scss'
})
export class NumberSpellComponent {

  @Input() digit: Digit;

  get spell() {
    return '';
  }

}
