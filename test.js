// Map, filter and reduce

// Polyfill for map()

// Array.map((num,i,arr)=> {})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// Polyfill for filter()

Array.prototype.myFiltter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this))temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multifplyArr = nums.myMap((num, i, arr) => {
  return num * 3;
});
const myFil = nums.myFiltter((num, i, arr) => {
  return nums[i]===3;
});

// console.log(multifplyArr);
console.log(myFil);
