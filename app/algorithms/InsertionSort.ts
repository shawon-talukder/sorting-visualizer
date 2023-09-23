/* 
 ***********************************************************************************************
 *
 ------->Title: Insertion sort algorithm
 ->Description: 
 ------>Author: Shawon Talukder
 -------->Date: 09/23/2023
 *
 ***********************************************************************************************
 */

export function InsertionSort(array: number[]) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    // store ith element
    let current = array[i];

    // last element of unsorted array
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // place the current one to jth element
    array[j + 1] = current;
  }
}
