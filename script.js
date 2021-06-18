const array = [1, 2, 3, 4, 5];

function binarySearch(arr, val, low, high) {
    let mid = Math.floor((high + low) / 2);

        if(arr[mid] === val) {
            return mid;
        }
        if(arr[mid] > val) {
            return binarySearch(arr, val, low, mid-1)
        }
        if(arr[mid] < val) {
            return binarySearch(arr, val, mid+1, high);
        }
    return -1;
}

console.log(binarySearch(array, 5, 0, array.length-1));

