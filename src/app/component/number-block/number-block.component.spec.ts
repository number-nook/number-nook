import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBlockComponent } from './number-block.component';
import { Digit } from '../../model/digit';

describe('NumberBlockComponent', () => {
  let component: NumberBlockComponent;
  let fixture: ComponentFixture<NumberBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberBlockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NumberBlockComponent);
    component = fixture.componentInstance;
    component.digit = new Digit(null, 0, 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
