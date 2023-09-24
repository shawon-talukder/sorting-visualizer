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

import { NestedSortTypes } from "../types";

export function InsertionSort(array: number[]) {
  const n = array.length;
  const animations: NestedSortTypes[] = [];

  for (let i = 1; i < n; i++) {
    const animation: NestedSortTypes = {
      currentIndex: i,
      comparison: [],
      swap: [],
    };

    // store ith element
    let current = array[i];

    // last element of unsorted array
    let j = i - 1;

    while (j >= 0) {
      if (array[j] > current) {
        animation.comparison.push([j, j + 1, array[j]]);
        array[j + 1] = array[j];
      } else {
        animation.comparison.push([j, -1, -1]);
        break;
      }
      j--;
    }

    animation.swap = [j + 1, current];
    // place the current one to jth element
    array[j + 1] = current;

    animations.push(animation);
  }

  return animations;
}
