class Polygon{
  constructor(sides){
    this.sides = sides;
  }

  get getCount(){
    return this.sides.length
  }

  get perimeter(){
    const per = this.sides.reduce((sum, side) => sum + side )
    return per
  }
}

class Triangle extends Polygon{
  get isValid(){
    this.sides.sort((a,b) => a - b)
    const c = this.sides[2] //longest
    const a = this.sides[0]
    const b = this.sides[1]
    if(this.getCount === 3 && a + b > c){
      return true;
    }
    return false;
  }

}


class Square extends Polygon{
  get area(){
    return this.sides[0] ** 2
  };

  get isValid(){
    const c = this.sides[2]
    const a = this.sides[0]
    const b = this.sides[1]
    if(this.getCount === 4 && a === b && b === c){
      return true;
    }
    return false;
  };
}
