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

> ### 2. find the 2nd smallest and 4th largest element from unsorted array without unsing any inbuild methods.
```
Solution:

```