/* 
 ***********************************************************************************************
 *
 ------->Title: Selection sort algorithm
 ->Description: assume one index as minimum, goes through array find minimum index,then swap
 ------>Author: Shawon Talukder
 -------->Date: 09/22/2023
 *
 ***********************************************************************************************
 */

export function SelectionSort(array: number[]) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      [array[min_index], array[i]] = [array[i], array[min_index]];
    }
  }
}
