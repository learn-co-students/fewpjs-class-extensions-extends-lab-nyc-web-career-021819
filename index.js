// Your code here

class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    };

    get getCount() {
        return this.sideLengths.length;
    };

    get perimeter() {
        return this.sideLengths.reduce((total, sideLength) => total + sideLength);
    }

}

class Triangle extends Polygon {

    get isValid() {
        const a = this.sideLengths[0]
        const b = this.sideLengths[1]
        const c = this.sideLengths[2]
        if (a < b + c && b < c + a  && c < b + a ) {
            return true
        } else { return false}
    }
}

class Square extends Polygon {

    get isValid() {
        const a = this.sideLengths[0]
        const b = this.sideLengths[1]
        const c = this.sideLengths[2]
        const d = this.sideLengths[3]
        if (a === b && b === c && c === d ) {
            return true
        } else { return false}
    }

    get area() {
        return this.sideLengths[0] ** 2;
    }
}