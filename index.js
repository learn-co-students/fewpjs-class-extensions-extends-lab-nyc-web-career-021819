// Your code here
class Polygon {
  constructor(array) {
    this.array = array
    this.count = this.array.length
  }
  get perimeter() {
    let perimeter = 0

    this.array.forEach(function(side) {
      perimeter += side
    })
    return perimeter

  }
  get getCount() {
    return this.array.length

  }
}

class Triangle extends Polygon {

  get isValid() {
  		if (
  			this.array[0] + this.array[1] <= this.array[2] ||
  			this.array[0] + this.array[2] <= this.array[1] ||
  			this.array[1] + this.array[2] <= this.array[0]
  		) {
  			return false
  		} else {
  			return true
  		}
  	}
  }
class Square extends Polygon {

  get isValid() {
		function getSum(total, num) {
			return total + num
		}
		if (
			this.array[0] === this.array[1] &&
			this.array[1] === this.array[2] &&
			this.array[2] === this.array[3]
		) {
			return true
		} else {
			return false
		}
	}

	get area() {
		return this.array[0] ** 2
	}
}
