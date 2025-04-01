export class NumericalExpression {

    andable: boolean = false;

    commable: boolean = false;

    // the "three" in "three hundred" 
    cardinal: string = '';

    // the "hundred" in "three hundred" 
    numeral: string = '';

    setExpression(cardinal: string, numeral: string): void;

    setExpression(cardinal: string, numeral: string, andable: boolean = false, commable: boolean = false) {
        this.cardinal = cardinal;
        this.numeral = numeral;
        this.andable = andable;
        this.commable = commable;
    }

}
