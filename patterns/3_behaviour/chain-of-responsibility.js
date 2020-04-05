class MySum {
  constructor (initialVal = 0) {
    this.sum = initialVal;
  }

  add (val) {
    this.sum += val;
    return this;
  }
}

const sum = new MySum();
console.log(sum.add(1).add(2).add(4).add(45).sum)
