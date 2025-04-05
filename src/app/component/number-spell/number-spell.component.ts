import { Component, DoCheck, Input } from '@angular/core';
import { Digit } from '../../model/digit';
import { NumberToSpeechService } from '../../service/number-to-speech.service';
import { NbspFallbackPipe } from '../../pipe/nbsp-fallback.pipe';
import { NumericalExpression } from '../../model/numerical-expression';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'number-spell',
  imports: [CommonModule, NbspFallbackPipe],
  templateUrl: './number-spell.component.html',
  styleUrl: './number-spell.component.scss'
})
export class NumberSpellComponent implements DoCheck {

  @Input()
  digit: Digit;

  private _numex: NumericalExpression;

  private static readonly AND = 'and';

  constructor(
    private numToSpeechService: NumberToSpeechService) {
  }

  ngDoCheck(): void {
    this._numex = this.numToSpeechService.convert(this.digit);
  }

  get spell() {
    let numeral = this._numex.numeral;
    let spell = this._numex.cardinal + (numeral ? ' ' + numeral : '');
    return spell;
  }

  get comma() {
    return this._numex.commable ? ',' : '';
  }

  get numex(): NumericalExpression {
    return this._numex;
  }

  andString() {
    return this._numex.andable ? NumberSpellComponent.AND : '';
  }

}
