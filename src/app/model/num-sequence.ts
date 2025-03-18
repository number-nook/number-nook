import { Digit } from "./digit";
import { NumSegment } from "./num-segment";

export class NumSequence {

    private _value: number;

    private _sequence: number[];

    private _digits: Digit[] = [];

    private _segments: NumSegment[] = [];

    constructor(value: number) {
        this._value = value;
        // turn the integer into an array of each single digit
        this._sequence = this._value.toString().split('').map(Number);
        let size = NumSegment.SIZE;
        // loop from the back of the sequence
        for (let i = this._sequence.length; i > 0; i -= size) {
            let segment = new NumSegment(this, Math.max(i - size, 0), i - 1);
            this._segments.unshift(segment);
            this._digits = [...segment.digits, ...this._digits];
        }
    }

    get sequence(): number[] {
        return this._sequence;
    }

    get segment(): NumSegment[] {
        return this._segments;
    }

    get digits(): Digit[] {
        return this._digits;
    }

    get value() {
        return this._value;
    }

    get lastNonemptySegment() {
        for (let i = this._segments.length - 1; i > 0; i--) {
            let seg = this._segments[i];
            if (!seg.empty) {
                return seg;
            }
        }
        return this._segments[0];;
    }

}
