import { TestBed } from '@angular/core/testing';

import { NumberToSpeechService } from './number-to-speech.service';

describe('NumberToSpeechService', () => {
  let service: NumberToSpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberToSpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
