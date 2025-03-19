import { NumSegment } from "./num-segment";
import { NumSequence } from "./num-sequence";

export class Digit {

    private _numSegment: NumSegment | null;

    private _symbol: number;

    private _pow: number;

    constructor() {
        this._symbol = -1;
    }

    get symbol(): number {
        return this._symbol;
    }

    set symbol(symbol: number) {
        if (!Number.isInteger(symbol)) {
            throw new Error('symbol must be integer');
        }

        if (symbol < 0 || symbol > 9) {
            throw new Error('digit must be between 0 and 9');
        }

        this._symbol = symbol;
    }

    get pow(): number {
        return this._pow;
    }

    set pow(p: number) {

        if (!Number.isInteger(p)) {
            throw new Error('pow must be integer');
        }

        this._pow = p;
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

    get initialized(): boolean {
        return this._symbol != -1;
    }

}
