# Importent Polyfill asked in Interviews.

> ### .1 Polyfill for Array.prototype.map()

```
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      newArray.push(callback.call(thisArg, this[i], i, this));
    }
    return newArray;
  };
}
```

> ### .2 Polyfill for Array.prototype.filter()

```
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
}

```

> ### .3 Polyfill for Array.prototype.reduce()

```
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {
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
}

```