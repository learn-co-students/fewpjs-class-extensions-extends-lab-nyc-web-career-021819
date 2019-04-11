// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get getCount(){
        return this.sides.length
    }
    
    get perimeter(){    
        return this.sides.reduce((side,sum)=>{
            return sum + side
        })
    }

    get isValid() {
        return this.sides.every(side => side === this.sides[0])
    }
}

class Triangle extends Polygon {
   
}

class Square extends Polygon {
    // get isValid() {
    //     return this.sides.every(side => side === this.sides[0])
    // }

    get area(){
        return this.sides[0] * this.sides[0]
    }

}