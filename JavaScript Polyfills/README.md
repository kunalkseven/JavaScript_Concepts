# Importent Polyfill asked in Interviews.

> ### 1. Polyfill for Array.prototype.map()

Syntex =>> array.map(function(currentValue, index, arr), thisValue)
```

  Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
```

> ### 2. Polyfill for Array.prototype.filter()

Syntex =>> array.filter(function(currentValue, index, arr), thisValue)

```

  Array.prototype.myFiltter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)){
      temp.push(this[i])
    };
  }
  return temp;
};

```

> ### 3. Polyfill for Array.prototype.reduce()

Syntex =>> arr.reduce((acc,currentValue,i,arr),initialValue)

```

  Array.prototype.myReduce = function(callback, initialValue) {
    var accumulator = (initialValue !== undefined) ? initialValue : undefined;
    for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };

```

> ### 4. Write a Polyfill function which run's only once.

```
function once(func,context){
    let run;
    
    return function (){
        if(func){
            run = func.apply(context || this, arguments);
            func = null
        }
        
        return run;
    }
}

const hello = once((name)=>console.log('Hello','Kunal'));

hello()
hello()
hello()
hello() 

```

> ### 4. Write a Polyfill function which run's only once.

```
function once(func,context){
    let run;
    
    return function (){
        if(func){
            run = func.apply(context || this, arguments);
            func = null
        }
        
        return run;
    }
}

const hello = once((name)=>console.log('Hello',name));

hello("Kunal")
hello("Kunal")
hello("Kunal")
hello("Kunal")

```
> ### 4. Write a Polyfill memoize/caching function.

```
function memoize(func, context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = func.call(context || this, ...args)
        }
        return res[argsCache]
    }
}

const clumsyCode = (num1,num2)=>{
    for(let i=0;i< 1000000;i++){}
    return num1 + num2
};

const memoizeClumsyCode = memoize(clumsyCode);


console.time('First call')
console.log(memoizeClumsyCode(123,987))
console.timeEnd('First call')

console.time('Second call')
console.log(memoizeClumsyCode(123,987))
console.timeEnd('Second call') 

```