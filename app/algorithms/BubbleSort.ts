/* 
 ***********************************************************************************************
 *
 ------->Title: Bubble sort algorithm
 ->Description: 
 ------>Author: Shawon Talukder
 -------->Date: 09/23/2023
 *
 ***********************************************************************************************
 */

import { AnimationTypes } from "../types";

export function BubbleSort(arr: number[]): AnimationTypes[] {
  let n = arr.length;
  const animations: AnimationTypes[] = [];

  for (let i = 0; i < n - 1; i++) {
    // declaring swap variable to optimize the sorting algorithm
    // if swapping happends we will not do anything
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      const animation: AnimationTypes = { swap: [], comparison: [] };

      animation.comparison.push(j, j + 1);

      if (arr[j] > arr[j + 1]) {
        animation.swap.push(arr[j], arr[j + 1]);

        // swap both array element
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
      animations.push(animation);
    }

    // optimizing
    // happens only when the array is fully sorted
    if (!swapped) break;
  }

  return animations;
}
