import { Digit } from './digit';
import { NumSequence } from './num-sequence';

describe('Digit', () => {
  it('should create an instance', () => {
    expect(new Digit(new NumSequence(0), 0, 0)).toBeTruthy();
  });
});


