export class Digit {

    private _digit: number;

    private _pow: number;

    constructor(digit: number, pow: number) {

        if (!Number.isInteger(digit)) {
            throw new Error('digit must be integer');
        }

        if (digit < 0 || digit > 9) {
            throw new Error('digit must be between 0 and 9');
        }


        if (!Number.isInteger(pow)) {
            throw new Error('pow must be integer');
        }

        this._digit = digit;
        this._pow = pow;
    }


    get digit() {
        return this._digit;
    }

    get pow() {
        return this._pow;
    }
}
