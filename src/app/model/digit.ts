export class Digit {

    private _symbol: number;

    private _pow: number;

    constructor(symbol: number, pow: number) {

        if (!Number.isInteger(symbol)) {
            throw new Error('symbol must be integer');
        }

        if (symbol < 0 || symbol > 9) {
            throw new Error('digit must be between 0 and 9');
        }


        if (!Number.isInteger(pow)) {
            throw new Error('pow must be integer');
        }

        this._symbol = symbol;
        this._pow = pow;
    }


    get symbol() {
        return this._symbol;
    }

    get pow() {
        return this._pow;
    }
}
