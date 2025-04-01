import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NumberNookComponent } from "../number-nook/number-nook.component";

@Component({
  selector: 'showcase',
  imports: [NumberNookComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent implements AfterViewInit {

  @ViewChild('numbernook')
  numbernook: NumberNookComponent;

  constructor(
    private changeDetect: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.numbernook.integer = this.rand;
    this.changeDetect.detectChanges();
  }

  get rand() {
    return Math.trunc(Math.random() * 10);
  }

}
