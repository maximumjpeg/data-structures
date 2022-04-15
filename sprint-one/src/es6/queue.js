class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.population = 0;
    this.left = 0;
    this.right = 0;
  }
  enqueue(value) {
    if (this.population === 0) {
      this.storage[this.left] = value;
      this.population++;
    } else {
      this.storage[this.right + 1] = value;
      this.population++;
      this.right++;
    }
  }
  dequeue() {
    var dequeued = this.storage[this.left];
    delete this.storage[this.left];
    this.left++;
    this.population--;
    return dequeued;
  }
  size() {
    if (this.population < 0) {
      return 0;
    } else {
      return this.population;
    }
  }
}

var instance = new Queue;
