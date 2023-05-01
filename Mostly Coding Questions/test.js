//  Given an array and chunk size, divide the array into many subarrays
//  where each subarray is of length size
//  --- Examples
//  chunk([1, 2, 3, 4], 2) --// [[ 1, 2], [3, 4]]
//  chunk([1, 2, 3, 4, 5], 2) --// [[ 1, 2], [3, 4], [5]]
//  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --// [[ 1, 2, 3], [4, 5, 6], [7, 8]]

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

console.log(chunk([1, 2, 3, 4], 1));

