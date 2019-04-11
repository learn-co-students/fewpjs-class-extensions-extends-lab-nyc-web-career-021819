// Your code here

class Polygon {

  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let perimeter = 0
    // for (let i = 0; i < this.sides.length; i++) {
    //   perimeter += sides[i]
    // }
    this.sides.forEach(function(side) {
      perimeter += side
    })
    return perimeter
  }
}

  class Triangle extends Polygon {

    get isValid() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]

      return ( ((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3) > side1) )

    }
  }

  class Square extends Polygon {

    get isValid() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]

      let x = side1 * side2 * side3 * side4

      //
      //
      // return ( (x/(Math.pow(side1,3))) == side1 ) && ( (x/(Math.pow(side2,3))) == side2) & ( (x/(Math.pow(side3,3))) == side3) && ( (x/(Math.pow(side4,3))) == side4)

      return ( (side1 == side2) && (side2 == side3) && (side3==side4) )
    }

    get area() {
      let side1 = this.sides[0]
      let side2 = this.sides[1]

      return side1 * side2
    }

  }

  let x = new Triangle([3,3,3])
  let triangle2 = new Triangle( [ 15, 10, 1 ] )

  var square = new Square( [ 5, 5, 5, 5 ] )
  var square2 = new Square( [ 5, 4, 3, 2 ] )

  // The sum of the lengths of any two sides of a triangle is greater than the length of the third side. If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. If that is not true, then it is not possible to construct a triangle with the given side lengths.
  //
  //
