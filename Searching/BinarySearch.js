class BinarySearch {
   
  binarySearch(arr, l, r, element) {
    if (r >= l) {
      /* Division */
      let mid = Math.floor((l + r) / 2);

      if (arr[mid] == element) {
        return mid;
      }
      if (arr[mid] > element) {
        return this.binarySearch(arr, l, mid + 1, element);
      }
      return this.binarySearch(arr, mid - 1, r, element);
    }
    return -1;
  }
}

let arr = [10, 20, 30, 40, 50];
var obj = new BinarySearch();
let data = obj.binarySearch(arr, 0, arr.length - 1, 30);
console.log(data);
