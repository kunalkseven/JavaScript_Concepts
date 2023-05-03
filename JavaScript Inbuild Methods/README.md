# JavaScript Built-in Methods

This document contains a list of built-in methods available in JavaScript for arrays, strings, and objects.

> # JavaScript Built-in Array Methods

### `Array.from()`

This method creates a new, shallow-copied Array instance from an array-like or iterable object.

```javascript
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);

console.log(array);
// Output: ['a', 'b', 'c']
```

### `Array.isArray()`

This method determines whether the passed value is an Array.

```javascript
const array = [1, 2, 3];

const isArray = Array.isArray(array);
console.log(isArray);
// Output: true
```

### `Array.of()`

This method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

```javascript
const array = Array.of(1, 'two', [3]);

console.log(array);
// Output: [1, 'two', [3]]
```

### `Array.prototype.concat()`

This method returns a new array that is a shallow copy of the original array with the elements of other arrays and/or values concatenated to it.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = array1.concat(array2);
console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6]
```

### `Array.prototype.copyWithin()`

This method shallow copies part of an array to another location in the same array and returns it without modifying its length.

```javascript
const array = [1, 2, 3, 4, 5];

const copiedArray = array.copyWithin(0, 3, 4);
console.log(copiedArray);
// Output: [4, 2, 3, 4, 5]
```

### `Array.prototype.entries()`

This method returns a new array iterator object that contains the key/value pairs for each index in the array.

```javascript
const array = ['a', 'b', 'c'];

const iterator = array.entries();
console.log(iterator.next().value);
// Output: [0, 'a']
console.log(iterator.next().value);
// Output: [1, 'b']
console.log(iterator.next().value);
// Output: [2, 'c']
```

### `Array.prototype.every()`

This method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
const array = [1, 2, 3];

const allEvenNumbers = array.every((element) => element % 2 === 0);
console.log(allEvenNumbers);
// Output: false
```

### `Array.prototype.fill()`

This method fills all the elements of an array from a start index to an end index with a static value.

```javascript
const array = [1, 2, 3];

array.fill(0, 1, 2);
console.log(array);
// Output: [1, 0, 3]
```

### `Array.prototype.filter()`

This method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const array = [1, 2, 3];

const filteredArray = array.filter((element) => element % 2 === 0);
console.log(filteredArray);
// Output: [2]
```


> # JavaScript Built-in String Methods

This document contains a list of built-in methods available in JavaScript for strings.

## String Methods

### `String.fromCharCode()`

This method returns a string created from the specified sequence of Unicode values.

```javascript
const string = String.fromCharCode(65, 66, 67);
console.log(string);
// Output: 'ABC'
```

### `String.prototype.charAt()`

This method returns the character at the specified index in a string.

```javascript
const string = 'hello';

const char = string.charAt(1);
console.log(char);
// Output: 'e'
```

### `String.prototype.charCodeAt()`

This method returns the Unicode value of the character at the specified index in a string.

```javascript
const string = 'hello';

const charCode = string.charCodeAt(1);
console.log(charCode);
// Output: 101
```

### `String.prototype.concat()`

This method combines two or more strings and returns a new string.

```javascript
const string1 = 'hello';
const string2 = 'world';

const newString = string1.concat(' ', string2);
console.log(newString);
// Output: 'hello world'
```

### `String.prototype.endsWith()`

This method determines whether a string ends with the characters of a specified string, returning true or false.

```javascript
const string = 'hello world';

const endsWith = string.endsWith('world');
console.log(endsWith);
// Output: true
```

### `String.prototype.includes()`

This method determines whether one string may be found within another string, returning true or false.

```javascript
const string = 'hello world';

const includes = string.includes('world');
console.log(includes);
// Output: true
```

### `String.prototype.indexOf()`

This method returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

```
javascript
const string = 'hello world';

const index = string.indexOf('world');
console.log(index);
// Output: 6

```

### `String.prototype.lastIndexOf()`

This method returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

```javascript
const string = 'hello world';

const index = string.lastIndexOf('o');
console.log(index);
// Output: 7
```

### `String.prototype.padEnd()`

This method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.

```javascript
const string = 'hello';

const paddedString = string.padEnd(10, '!');
console.log(paddedString);
// Output: 'hello!!!!!'
```

### `String.prototype.padStart()`

This method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.

```javascript
const string = 'hello';

const paddedString = string.padStart(10, '!');
console.log(paddedString);
// Output: '!!!!hello'
```

### `String.prototype.repeat()`

This method returns a new string with a specified number of copies of an existing string.

```javascript
const string = 'hello';

const repeatedString = string.repeat(3);
console.log(repeatedString);
// Output: 'hellohellohello'
```

### `String.prototype.replace()`

This method returns a new string with some or all matches of a pattern replaced by a replacement.

```javascript
const string = 'hello world';

const newString = string.replace('world', 'JavaScript');
console.log(newString);
// Output: 'hello JavaScript'
```

### `String.prototype.slice()`

This method extracts a section of a string and returns a new string.

```javascript
const string = 'hello world';

const slicedString = string.slice(6, 11);
console.log(slicedString);
// Output: 'world'
```

### `String.prototype.split()`

This method splits a string into an array of substrings based on a specified separator.

```javascript
const string = 'hello world';

const splitString = string.split(' ');
console.log(splitString);
// Output: ['hello', 'world']
```

### `String.prototype.startsWith()`

This method determines whether a string begins with the characters of a specified string, returning true or false.

```javascript
const string = 'hello world';

const startsWith = string.startsWith('hello');
console.log(startsWith);
// Output: true
```

### `String.prototype.substring()`

This method returns a subset of a string between one index and another, or through the end of the string.

```javascript
const string = 'hello world';

const subString = string.substring(6, 11);
console.log(subString);
// Output: 'world'
```

### `String.prototype.toLowerCase()`

This method returns the calling string value converted to lowercase.

```javascript
const string = 'HELLO WORLD';

const lowerCaseString = string.toLowerCase();
console.log(lowerCaseString);
// Output: 'hello world'
```

### `String.prototype.toUpperCase()`

This method returns the calling string value converted to uppercase.

```javascript
const string = 'hello world';

const upperCaseString = string.toUpperCase();
console.log(upperCaseString);
// Output: 'HELLO WORLD'
```

### `String.prototype.trim()`

This method removes whitespace from both ends of a string.

```javascript
const string = '   hello world   ';

const trimmedString = string.trim();
console.log(trimmedString);
// Output: 'hello world'
```

### `String.prototype.trimEnd()`

This method removes whitespace from the end of a string.

```javascript
const string = '   hello world   ';

const trimmedString = string.trimEnd();
console.log(trimmedString);
// Output: '   hello world'
```

### `String.prototype.trimStart()`

This method removes whitespace from the beginning of a string.

```javascript
const string = '   hello world   ';

const trimmedString = string.trimStart();
console.log(trimmedString);
// Output: 'hello world   '
```

> # JavaScript Built-in Object Methods

### `Object.assign()`

This method is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.

```javascript
Object.assign(target, ...sources);
```

- `target`: The target object to copy properties to.
- `sources`: One or more source objects to copy properties from.

Example:

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const assignedObject = Object.assign(target, source);

console.log(assignedObject);
// Output: { a: 1, b: 4, c: 5 }
```

### `Object.create()`

This method creates a new object with the specified prototype object and properties.

```javascript
Object.create(proto, [propertiesObject]);
```

- `proto`: The object which should be the prototype of the newly-created object.
- `propertiesObject`: Optional. An object whose properties specify property descriptors to be added to the newly-created object.

Example:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const john = Object.create(person);

console.log(john.firstName); // Output: "John"
console.log(john.lastName); // Output: "Doe"
console.log(john.fullName()); // Output: "John Doe"
```

### `Object.defineProperty()`

This method defines a new property directly on an object, or modifies an existing property, and returns the object.

```javascript
Object.defineProperty(obj, prop, descriptor);
```

- `obj`: The object on which to define the property.
- `prop`: The name or Symbol of the property to be defined or modified.
- `descriptor`: The descriptor for the property being defined or modified.

Example:

```javascript
const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // Output: "John"
obj.name = 'Jane'; // This will fail silently since the property is not writable
console.log(obj.name); // Output: "John"
```

### `Object.defineProperties()`

This method defines new or modifies existing properties directly on an object, returning the object.

```javascript
Object.defineProperties(obj, props);
```

- `obj`: The object on which to define or modify properties.
- `props`: An object whose keys are the names or Symbols of the properties to be defined or modified, and whose values are the descriptors for the properties.

Example:

```javascript
const obj = {};

Object.defineProperties(obj, {
  name: {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true
  }
});

console.log(obj.name); // Output: "John"
console.log(obj.age); // Output: 30
```

### `Object.entries()`

This method returns an array of a given object's own enumerable property [key, value] pairs.

```javascript
Object.entries(obj);
```

- `obj`: The object whose enumerable property [key, value] pairs are to be returned.

Example:

```javascript
const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);

console.log(entries);
// Output