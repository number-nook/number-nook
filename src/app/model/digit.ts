import { NumSegment } from "./num-segment";
import { NumSequence } from "./num-sequence";

export class Digit {

    private _numSegment: NumSegment | null;

    private _symbol: number;

    private _pow: number;

    constructor(numSegment: NumSegment | null = null, symbol: number, pow: number) {

        if (!Number.isInteger(symbol)) {
            throw new Error('symbol must be integer');
        }

        if (symbol < 0 || symbol > 9) {
            throw new Error('digit must be between 0 and 9');
        }


        if (!Number.isInteger(pow)) {
            throw new Error('pow must be integer');
        }

        this._numSegment = numSegment;
        this._symbol = symbol;
        this._pow = pow;
    }


    get symbol(): number {
        return this._symbol;
    }

    get pow(): number {
        return this._pow;
    }

    get before(): Digit {
        if (this._numSegment === null) {
            throw new Error('numSegment is null');
        }
        return this._numSegment.numSequence.digits[this._numSegment.numSequence.digits.length - this.pow - 2];
    }

    get after(): Digit {
        if (this._numSegment === null) {
            throw new Error('numSegment is null');
        }
        return this._numSegment.numSequence.digits[this._numSegment.numSequence.digits.length - this.pow];
    }

    set segment(seg: NumSegment) {
        this._numSegment = seg;
    }

    get segment(): NumSegment | null {
        // return segment of the digit in NumberSequence at most 3 digits
        return this._numSegment;
    }

    isEqualTo(sym: number) {
        return this._symbol === sym;
    }

    toString(): string {
        return this.symbol * Math.pow(10, this._pow) + '';
    }

}
