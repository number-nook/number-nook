import { Digit } from "./digit";
import { NumSequence } from "./num-sequence";

export class NumSegment {

    static readonly SIZE: number = 3;

    private _numSequence: NumSequence;

    private _digits: Digit[] = [];

    constructor(numseq: NumSequence, p: number, q: number) {
        this._numSequence = numseq;
        for (let i = p; i <= q; i++) {
            this._digits.push(new Digit(this, numseq.sequence[i], numseq.sequence.length - 1 - i));
        }

    }

    get numSequence() {
        return this._numSequence;
    }

    get digits(): Digit[] {
        return this._digits;
    }

}
