class RandomizedSet {
  constructor() {
    this.map = {};
    this.array = [];
  }

  insert(val) {
    if (val in this.map) {
      return false;
    } else {
      this.map[val] = this.array.length;
      this.array.push(val);
      return true;
    }
  }

  remove(val) {
    if (val in this.map) {
      let idx = this.map[val];
      let lastIndex = this.array.length - 1;
      this.array[idx] = this.array[lastIndex];
      this.map[this.array[lastIndex]] = idx;
      this.array.pop();
      delete this.map[val];

      return true;
    } else {
      return false;
    }
  }

  getRandom() {
    let idx = Math.floor(Math.random() * this.array.length);
    return this.array[idx];
  }
}

const obj = new RandomizedSet();
console.log(obj.insert(0));
console.log(obj.insert(1));
console.log(obj.remove(0));
console.log(obj.insert(2));
console.log(obj.remove(1));

console.log(obj.getRandom());
