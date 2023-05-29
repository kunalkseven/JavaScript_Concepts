# Importent Polyfill asked in Interviews.

> ### .1 Polyfill for Array.prototype.map()

Syntex =>> array.map(function(currentValue, index, arr), thisValue)
```

  Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      newArray.push(callback.call(this[i], i, this));
    }
    return newArray;
  };
  
```

> ### .2 Polyfill for Array.prototype.filter()

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

> ### .3 Polyfill for Array.prototype.reduce()

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