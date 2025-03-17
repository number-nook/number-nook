import { Component, Input } from '@angular/core';
import { NumberBlockComponent } from "../number-block/number-block.component";
import { Digit } from '../../model/digit';
import { NumberSpellComponent } from "../number-spell/number-spell.component";

@Component({
  selector: 'number-card',
  imports: [NumberBlockComponent, NumberSpellComponent],
  templateUrl: './number-card.component.html',
  styleUrl: './number-card.component.scss'
})
export class NumberCardComponent {


  @Input()
  digit: Digit;

}
