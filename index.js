// Your code here
class Polygon {
  constructor(array) {
    this.shape_sides = array;
  }

  get getCount() {
    return this.shape_sides.length;
  }

  get perimeter() {
    let total = 0
    this.shape_sides.forEach((side) => {
      total += side
    })
    return total;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.shape_sides.length === 3) {
      const side_a = this.shape_sides[0]
      const side_b = this.shape_sides[1]
      const side_c = this.shape_sides[2]
      if ((side_a + side_b) < side_c) {
        return false;
      } else if ((side_a + side_c) < side_b) {
        return false;
      } else if ((side_b + side_c) < side_a) {
        return false;
      } else {
        return true;
      }
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.shape_sides.length === 4) {
      const side_a = this.shape_sides[0]
      const side_b = this.shape_sides[1]
      const side_c = this.shape_sides[2]
      const side_d = this.shape_sides[3]
      if (side_a === side_b && side_b === side_c && side_c === side_d) {
        return true;
      } else {
        return false;
      }
    }
  }

  get area() {
    if (this.isValid) {
      const side = this.shape_sides[0]
      return (side * side)
    }
  }
}
