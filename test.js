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
// console.log(myFil);




function sumfunc(...args){
  // console.log(Object.values(arguments).length > 1)
  if(Object.values(arguments).length > 1){
      let sum = 0
      for(let x of arguments){
          sum = sum + x
      }
      return sum
  }else{
        const sum = args.reduce((total, current) => total + current, 0);
        function curry(...nextArgs) {
          if (nextArgs.length === 0) {
            return sum;
          }
          return sumfunc(sum, ...nextArgs);
        }
        return curry;
  }
}

// console.log(sumfunc(1)(2)(3)(4))



const person = {
  greet: 'Welcome',
  name : function(fullName){
    return `My name is ${fullName}`;
  }
}

const teacher = {
  teach: function(subject){
    return `I teach ${subject}`
  }
}

teacher.__proto__ = person;

teacher.greet