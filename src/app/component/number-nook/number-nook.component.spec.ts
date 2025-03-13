import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberNookComponent } from './number-nook.component';

describe('NumberNookComponent', () => {
  let component: NumberNookComponent;
  let fixture: ComponentFixture<NumberNookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberNookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberNookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
