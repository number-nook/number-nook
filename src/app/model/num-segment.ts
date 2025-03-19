import { sequenceEqual } from "rxjs";
import { Digit } from "./digit";
import { NumSequence } from "./num-sequence";

export class NumSegment {

    static readonly SIZE: number = 3;

    private _numSequence: NumSequence;

    private _digits: Digit[] = [];

    constructor() {
        for (let i = 0; i < NumSegment.SIZE; i++) {
            let digit = new Digit();
            digit.segment = this;
            this._digits.push(digit);
        }
    }

    get numSequence() {
        return this._numSequence;
    }

    set numSequence(seq: NumSequence) {
        this._numSequence = seq;
    }

    get digits(): Digit[] {
        return this._digits;
    }

    // return true if whole segment is 0
    get empty() {
        return this._digits.every(d => d.isEqualTo(0));
    }

    // return true if this segment is the last in numSequence
    get isLast() {
        let segs = this._numSequence.segment;
        let seqLength = segs.length;
        return this === segs[seqLength - 1];
    }

}
