function intro(name,job){
  this.name = name;
  this.job = job;

  // return console.log(name,job)
}

const abc = new intro('abc',99)

console.log(abc.job)
console.log(abc);