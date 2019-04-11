// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get getCount() {
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce( (sum, side) => {
            return sum + side 
        })
    }
    get isValid(){
        return this.sides.every(side => side === this.sides[0])
    }
}

class Triangle extends Polygon {

}

class Square extends Polygon {
    get area() {
        return this.sides[0] * this.sides[0]
    }
}
