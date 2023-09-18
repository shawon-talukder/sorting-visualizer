/* 
 ***********************************************************************************************
 *
 ------->Title: Merge sort algorithm
 ->Description: merge sort follows divide and merge process. divide arrays into small part 
                and merge them by ascending order
 ------>Author: Shawon Talukder
 -------->Date: 09/18/2023
 *
 ***********************************************************************************************
 */

// function to merge all divided arrays
export function Merge(array: number[], low: number, mid: number, high: number) {
  let res = array.slice(low, high + 1);

  // get three variable indicating indexes
  // li = left array index
  let li = low;
  // ri = right array index
  let ri = mid + 1;
  // ai = main array index,
  let ai = low;

  while (li <= mid && ri <= high) {
    const left = res[li - low];
    const right = res[ri - low];

    if (left <= right) {
      array[ai++] = left;
      li++;
    } else {
      array[ai++] = right;
      ri++;
    }
  }

  // if any array element leftover, insert them into the main array

  // if left side index is still left
  while (li <= mid) {
    array[ai++] = res[li - low];
    li++;
  }
  // if right side index is still left
  while (ri <= high) {
    array[ai++] = res[ri - low];
    ri++;
  }
}

export function MergeSort(array: number[], startInd: number, endInd: number) {
  if (startInd >= endInd) return;

  //get mid of the array
  let mid = Math.floor(startInd + (endInd - startInd) / 2);

  // recursive call to divide array
  MergeSort(array, startInd, mid);
  MergeSort(array, mid + 1, endInd);

  // merge all array
  Merge(array, startInd, mid, endInd);
}
