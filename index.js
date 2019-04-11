class Polygon {
  constructor(integerArray) {
    this.integerArray = integerArray
  }

  get getCount() {
    return this.integerArray.length
  }

  get perimeter() {
    return this.integerArray.reduce((acc, x) => acc + x)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.integerArray[0] + this.integerArray[1] < this.integerArray[2]) {
      return false
    } else if (this.integerArray[0] + this.integerArray[2] < this.integerArray[1]) {
      return false
    } else if (this.integerArray[1] + this.integerArray[2] < this.integerArray[0]) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.integerArray[0] === this.integerArray[1] && this.integerArray[1] === this.integerArray[2] && this.integerArray[2] === this.integerArray[3] ? true : false )
  }

  get area() {
    return (this.integerArray[0] * this.integerArray[1])
  }
}
