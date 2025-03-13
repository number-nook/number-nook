import { Component, Input } from '@angular/core';
import { Digit } from '../../model/digit';
import { NumberToSpeechService } from '../../service/number-to-speech.service';

@Component({
  selector: 'number-spell',
  imports: [],
  templateUrl: './number-spell.component.html',
  styleUrl: './number-spell.component.scss'
})
export class NumberSpellComponent {

  @Input()
  digit: Digit;

  constructor(
    private numToSpeechService: NumberToSpeechService) {

  }

  get spell() {
    return this.numToSpeechService.convert(this.digit);
  }

}
