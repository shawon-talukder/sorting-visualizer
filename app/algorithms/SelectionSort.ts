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

import { NestedSortTypes } from "../types";

export function SelectionSort(array: number[]) {
  // to set animations for sorting
  const animations: NestedSortTypes[] = [];

  // array length
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    const animation: NestedSortTypes = {
      currentIndex: i,
      swap: [],
      comparison: [],
    };

    // declare minimum index
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      // put comparison indexes to animation
      const nested = [j, min_index];

      // if any element in the array in lower than min_index's value, change min_index value
      if (array[j] < array[min_index]) {
        min_index = j;
        nested.push(min_index);
      }
      animation.comparison.push(nested);
    }

    if (min_index !== i) {
      // animation
      animation.swap = [i, array[i], min_index, array[min_index]];

      // if there is minimum index, swap
      // swapping by destructuring
      [array[min_index], array[i]] = [array[i], array[min_index]];
    }

    // push animation for this index
    animations.push(animation);
  }

  return animations;
}
