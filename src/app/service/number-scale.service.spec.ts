import { TestBed } from '@angular/core/testing';

import { NumberScaleService } from './number-scale.service';

describe('NumberScaleService', () => {
  let service: NumberScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
