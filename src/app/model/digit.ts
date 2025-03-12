import { NumSequence } from "./num-sequence";

export class Digit {

    private _numSequence: NumSequence;

    private _symbol: number;

    private _pow: number;

    constructor(numSequence: NumSequence, symbol: number, pow: number) {

        if (!Number.isInteger(symbol)) {
            throw new Error('symbol must be integer');
        }

        if (symbol < 0 || symbol > 9) {
            throw new Error('digit must be between 0 and 9');
        }


        if (!Number.isInteger(pow)) {
            throw new Error('pow must be integer');
        }

        this._numSequence = numSequence;
        this._symbol = symbol;
        this._pow = pow;
    }


    get symbol(): number {
        return this._symbol;
    }

    get pow(): number {
        return this._pow;
    }

    get numSequence(): NumSequence {
        return this._numSequence;
    }

    get before(): Digit {
        return this._numSequence.digits[this.pow - 1];
    }

    get after(): Digit {
        return this._numSequence.digits[this.pow + 1];
    }
}
