class MergeSort {
  constructor(size) {}

  /*
   * Time complexity O(n logn)
   */

  merge(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    /* Temp arrays with divided vales */
    let L = new Array(n1);
    let R = new Array(n2);
    for (let x = 0; x <= n1; x++) {
      L[x] = arr[l + x];
    }
    for (let y = 0; y <= n1; y++) {
      R[y] = arr[mid + 1 + y];
    }

    let i = 0;
    let j = 0;
    let k = l;

    /* Comparision */
    while (i < n1 && j < n2) {
      if (L[i] > R[j]) {
        arr[k] = R[j];
        j++;
      } else {
        arr[k] = L[i];
        i++;
      }
      k++;
    }

    /* Put the remaining element in array */
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    /* Put the remaining element in array */
    while (i < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  mergeSort(arr, l, r) {
    /* Base condition */
    if (l >= r) {
      return;
    }
    /* Division */
    let mid = Math.floor((l + r) / 2);
    /*Recusion */
    this.mergeSort(arr, l, mid);
    this.mergeSort(arr, mid + 1, r);
    /* Merging */
    this.merge(arr, l, mid, r);
  }

  result() {
    console.log(arr);
  }
}

let arr = [56, 63, 99, 74, 12, -1];
var obj = new MergeSort();
obj.mergeSort(arr, 0, arr.length);
obj.result();
