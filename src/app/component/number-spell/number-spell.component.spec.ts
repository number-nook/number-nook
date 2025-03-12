import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpellComponent } from './number-spell.component';

describe('NumberSpellComponent', () => {
  let component: NumberSpellComponent;
  let fixture: ComponentFixture<NumberSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberSpellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
