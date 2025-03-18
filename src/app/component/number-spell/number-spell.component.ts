import { Component, Input } from '@angular/core';
import { Digit } from '../../model/digit';
import { NumberToSpeechService } from '../../service/number-to-speech.service';
import { NbspFallbackPipe } from '../../pipe/nbsp-fallback.pipe';

@Component({
  selector: 'number-spell',
  imports: [NbspFallbackPipe],
  templateUrl: './number-spell.component.html',
  styleUrl: './number-spell.component.scss'
})
export class NumberSpellComponent {

  @Input()
  digit: Digit;

  private static readonly AND = 'and';


  constructor(
    private numToSpeechService: NumberToSpeechService) {

  }

  get spell() {
    return this.numToSpeechService.convert(this.digit);
  }

  andString() {
    return this.numToSpeechService.andable(this.digit) ? NumberSpellComponent.AND : '';
  }

}
