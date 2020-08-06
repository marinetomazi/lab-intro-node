class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items;
  }

  get(pos) {
   this.items[pos];
    if(this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }
  }

  max() {
    const maxi = Math.max.apply(null, this.items);
    return maxi;
    /*this.items.sort();
    let maxi = (this.items.length-1);
     return this.items[maxi];
if (this.items === []){
  throw new Error('EmptySortedList');*/
}

  min() {
    const min = Math.min.apply(null, this.items);
    return min;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
