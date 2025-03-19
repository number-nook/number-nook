import { TitleStrategy } from "@angular/router";
import { Digit } from "./digit";
import { NumSegment } from "./num-segment";

export class NumSequence {

    static readonly MAX_LENGTH: number = 12;

    private _value: number;

    private _sequence: number[] = [];

    private _digits: Digit[] = [];

    private _segments: NumSegment[] = [];

    constructor() {
        for (let i = 0; i < NumSequence.MAX_LENGTH / NumSegment.SIZE; i++) {
            let seg = new NumSegment();
            seg.numSequence = this;
            this._segments.push(seg);
            this._digits = this._digits.concat(seg.digits);
        }
    }

    set value(value: number) {
        this._value = value;
        // turn the integer into an array of each single digit
        this._sequence = this._value.toString().split('').map(Number);

        let seqlen = this._sequence.length;
        let offset = this._digits.length - seqlen;

        for (let i = 0; i < offset; i++) {
            this._digits[i].neutralize;
        }

        for (let i = 0; i < seqlen; i++) {
            let seq = this._sequence[i];
            let digit = this._digits[offset + i];
            digit.symbol = seq;
            digit.pow = seqlen - 1 - i;
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
