# List Mostly Coding Questions In Frontend Interview.

> ### 1. find the 2nd smallest and 4th largest element from unsorted array without unsing any inbuild methods.
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

> ### 2. find the comman value in two objects.
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

> ### 3. find the 2nd smallest and 4th largest element from unsorted array without unsing any inbuild methods.
```
Solution:

```