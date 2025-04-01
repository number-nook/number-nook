import { Component, DoCheck, Input } from '@angular/core';
import { Digit } from '../../model/digit';
import { NumberToSpeechService } from '../../service/number-to-speech.service';
import { NbspFallbackPipe } from '../../pipe/nbsp-fallback.pipe';
import { NumericalExpression } from '../../model/numerical-expression';

@Component({
  selector: 'number-spell',
  imports: [NbspFallbackPipe],
  templateUrl: './number-spell.component.html',
  styleUrl: './number-spell.component.scss'
})
export class NumberSpellComponent implements DoCheck {

  @Input()
  digit: Digit;

  private numex: NumericalExpression;

  private static readonly AND = 'and';

  constructor(
    private numToSpeechService: NumberToSpeechService) {
  }
  ngDoCheck(): void {
    this.numex = this.numToSpeechService.convert(this.digit);
  }

  get spell() {
    return `${this.numex.cardinal} ${this.numex.numeral}`;
  }

  andString() {
    return this.numex.andable ? NumberSpellComponent.AND : '';
  }

}
