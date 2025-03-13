import { first } from 'rxjs';
import { Digit } from './digit';
import { NumSequence } from './num-sequence';

describe('NumSequence', () => {
  it('should create an instance', () => {
    expect(new NumSequence(0)).toBeTruthy();
  });

  let numSequence: NumSequence = new NumSequence(908213);
  it('should have corrcet length of digits', () => {
    expect(numSequence.digits.length).toEqual(6);
  });

  it('should has correct value', () => {
    expect(numSequence.value).toEqual(908213);
  });

  let firstDigit: Digit = numSequence.digits[0];
  it('should return correct first digit', () => {
    expect(firstDigit.symbol).toEqual(9);
    expect(firstDigit.pow).toEqual(5);
  });

  let secondDigit: Digit = firstDigit.after
  it('should return correct after digit', () => {
    expect(secondDigit.symbol).toEqual(0);
    expect(secondDigit.pow).toEqual(4);
  });

  it('should have correct digit linkage', () => {
    expect(secondDigit.before).toEqual(firstDigit);
    expect(secondDigit.before.symbol).toEqual(9);
    expect(secondDigit.before.pow).toEqual(5);
  });

  it('should have correct numSequence linkage', () => {
    expect(secondDigit.numSequence).toEqual(numSequence);
  });

  it('should return underfined when accessing digit before first', () => {
    expect(firstDigit.before).toBeUndefined();
  });


  let lastDigit: Digit = numSequence.digits.at(-1)!;
  it('should return underfined when accessing digit after last', () => {
    expect(lastDigit.after).toBeUndefined();
  });
});


