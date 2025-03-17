import { Component } from '@angular/core';
import { NumberNookComponent } from '../number-nook/number-nook.component';

@Component({
  selector: 'test-card',
  imports: [NumberNookComponent],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss'
})
export class TestCardComponent {

}
