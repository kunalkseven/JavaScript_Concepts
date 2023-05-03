# List Mostly Coding Questions In Frontend Interview.

> ### 1. Find the 2nd smallest and 4th largest element from unsorted array without unsing any inbuild methods.

```
Solution:
function findElement(arr) {
  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // Swap the position on some condition
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr[1],arr[arr.length - 3];
}

findElement([2, 4, 3, 9, 5])

```

> ### 2. Find the comman value in two objects.

```
const input1 = {a:12,b:10,d:10,r:23};
const input2 = {d:10,b:1,a:12};
// output >> {a:12,d:10}

function findMatch(obj1,obj2){
    const result = {}
    for(ele in obj1){
        if( obj1[ele] === obj2[ele]){
            result[ele] = obj1[ele]
        }
    }
    return result;
}

console.log(findMatch(input1,input2))

```

> ### 3. Solve input = [1,[2,[3,4,[12]]]] , output = [1,2,3,4,12] without using flat or inbuild methods

```
Solution:

```

> ### 4. Given a string, return the character that is most commonly used in the string.
>
> ### --- Examples
>
> ### maxChar("abcccccccd") === "c"
>
> ### maxChar("apple 1231111") === "1"s.

```
Solution:

function maxChar(str) {
    let hasMap = {};
    let maxValue = 0;
    let maxCharacter = '';

    for(let char of str) {
        hasMap[char] = hasMap[char] + 1 || 1
    }

    for(let char in hasMap){
        if(hasMap[char] > maxValue){
            maxValue = hasMap[char];
            maxCharacter = char
        }
    }

    return [maxCharacter,maxValue]
}

maxChar("abcccccccd")

```

> ### 5. Given an array and chunk size, divide the array into many subarrays
> ### where each subarray is of length size
> ### --- Examples
> ### chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
> ### chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
> ### chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]

```
Solution: 1

function chunk(arr, size) {
    const result = [];

    for(let ele of arr){
        const last  = result[result.length - 1];

        if(!last || last.length === size){
            result.push([ele]);
        }else{
            last.push(ele)
        }
    }
    return result

}

solution: 2

function chunk(arr, size) {
    const result  = [];
    let index  = 0;

    while(index < arr.length){
        result.push(arr.slice(index,index+size));
        index += size;
    }
    return result
}

chunk([1, 2, 3, 4], 1)
```


> ### 6. Write a function that accepts a string. The function should
> ### capitalize the first letter of each word in the string then
> ### return the capitalized string.
> ### --- Examples
> ### capitalize('a short sentence') --> 'A Short Sentence'
> ### capitalize('a lazy fox') --> 'A Lazy Fox'
> ### capitalize('look, it is working!') --> 'Look, It Is Working!'

```
Solution: 1

function capitalize(str){
  const strArr = str.split(' ');
  let result = '';
  for(let char of strArr){
    let newChar = char[0].toUpperCase() + char.slice(1)
    result = result + " " + newChar;
  }
  return result;
}
capitalize('a short sentence')

Solution: 2

function capitalize(str){
  let strArr = str.split('');
  let result = strArr[0].toUpperCase();

  for(let i=1;i<strArr.length;i++){
    if(strArr[i-1]=== " "){
      result = result + strArr[i].toUpperCase();
    }else{
      result = result + strArr[i]
    }
  }
  return result;
}

capitalize('a short sentence')

```

> ### 7. Write a program to remove  the first element of an array without using any inbuild method in JavaScript.

```
solution: 1

function removeFirstElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const firstElement = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]; 
  }
  arr.length = arr.length - 1;
  return firstElement;
}

// example usage
const myArray = [1, 2, 3, 4, 5];
const removedElement = removeFirstElement(myArray);
console.log(removedElement); // output: 1
console.log(myArray); // output: [2, 3, 4, 5]

```

> ### 8. Write a program to pop the element of an array without using any inbuild method in javaScript.

```
Solution: 1

function popFromArray(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

// example usage
const myArray = [1, 2, 3, 4, 5];
const poppedElement = popFromArray(myArray);
console.log(poppedElement); // output: 5
console.log(myArray); // output: [1, 2, 3, 4]

```

> ### 9. Write a function that returns the number of vowels
> ### used in a string.  Vowels are the characters 'a', 'e'
> ### 'i', 'o', and 'u'.
> ### --- Examples
> ###   vowels('Hi There!') --> 3
> ###   vowels('Why do you ask?') --> 4
> ###   vowels('Why?') --> 0


```
Solution: 1

function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

Solution: 2

function vowels(str){
  const vowelsList = ['a','e','i','o','u'];
  let count = 0;

  for(let char of str.toLowerCase()){
    if(vowelsList.includes(char)){
      count++; 
    }
  }
  return count;
}

```