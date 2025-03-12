import { Digit } from "./digit";

export class NumSequence {

    private _value: number;

    private _sequence: number[];

    private _digits: Digit[] = [];

    constructor(value: number) {
        this._value = value;
        // turn the integer into an array of each single digit
        this._sequence = this._value.toString().split('').map(Number);
        // for each element of sequence, construct a Digit
        for (let i = 0; i < this._sequence.length; i++) {
            this._digits[i] = new Digit(this, this._sequence[i], this._sequence.length - 1 - i);
        }
    }

    get sequence(): number[] {
        return this._sequence;
    }

    get digits(): Digit[] {
        return this._digits;
    }


    get value() {
        return this._value;
    }
}
