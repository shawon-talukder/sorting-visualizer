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

import { AnimationTypes } from "../types/index";

// function to merge all divided arrays
function Merge(
  array: number[],
  low: number,
  mid: number,
  high: number,
  animations: AnimationTypes[]
) {
  let res = array.slice(low, high + 1);

  // get three variable indicating indexes
  // li = left array index
  let li = low;
  // ri = right array index
  let ri = mid + 1;
  // ai = main array index,
  let ai = low;

  while (li <= mid && ri <= high) {
    const animation: AnimationTypes = { comparison: [], swap: [] };
    const left = res[li - low];
    const right = res[ri - low];

    animation.comparison = [li, ri];
    if (left <= right) {
      animation.swap = [ai, li];
      array[ai++] = left;
      li++;
    } else {
      animation.swap = [ai, ri];
      array[ai++] = right;
      ri++;
    }

    animations.push(animation);
  }

  // if any array element leftover, insert them into the main array

  // if left side index is still left
  while (li <= mid) {
    array[ai++] = res[li++ - low];
  }
  // if right side index is still left
  while (ri <= high) {
    array[ai++] = res[ri++ - low];
  }
}

function MergeSort(
  array: number[],
  startInd: number,
  endInd: number,
  animations: AnimationTypes[]
) {
  if (startInd >= endInd) return;

  //get mid of the array
  let mid = Math.floor(startInd + (endInd - startInd) / 2);

  // recursive call to divide array
  MergeSort(array, startInd, mid, animations);
  MergeSort(array, mid + 1, endInd, animations);

  // merge all array
  Merge(array, startInd, mid, endInd, animations);
}

export function MergeHelper(array: number[], length: number): AnimationTypes[] {
  let animations: AnimationTypes[] = [];

  MergeSort(array, 0, length - 1, animations);

  return animations;
}
