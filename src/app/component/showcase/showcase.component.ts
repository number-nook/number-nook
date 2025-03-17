import { Component } from '@angular/core';
import { NumberNookComponent } from "../number-nook/number-nook.component";

@Component({
  selector: 'showcase',
  imports: [NumberNookComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

}
