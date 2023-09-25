/* 
 ***********************************************************************************************
 *
 ------->Title: Quick sort algorithm
 ->Description: Quick sort follows divide and conquer process. Picks an pivot, partitions the array around picked pivot by placing it in its correct position 
 ------>Author: Shawon Talukder
 -------->Date: 09/25/2023
 *
 ***********************************************************************************************
 */

import { QuickSortTypes } from "../types";

function Partition(
  arr: number[],
  low: number,
  high: number,
  animations: QuickSortTypes[]
): number {
  // choosing last element as pivot
  let pivot = arr[high];

  const animation: QuickSortTypes = {
    swap: [],
    comparison: [],
    pivot: 0,
  };

  // Index of smaller element and indicates
  // the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animation.comparison.push([j, high]);
    // If current element is smaller than the pivot
    if (arr[j] <= pivot) {
      // increment position for smaller element
      i++;
      // animation: index and values for swap
      animation.swap.push([i, arr[j], j, arr[i]]);
      // swap elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      animation.swap.push([]);
    }
  }
  animation.swap.push([i + 1, arr[high], high, arr[i + 1]]);

  // swap smaller element with high value
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  // set the pivot
  animation.pivot = i + 1;

  animations.push(animation);
  return i + 1;
}

function QuickSort(
  array: number[],
  low: number,
  high: number,
  animations: QuickSortTypes[]
) {
  if (low >= high) return;

  let pivot = Partition(array, low, high, animations);

  // recursive call to partition and sort the before and after element of pivot
  // before elements
  QuickSort(array, low, pivot - 1, animations);
  // after elements
  QuickSort(array, pivot + 1, high, animations);
}

export function QuickHelper(array: number[]): QuickSortTypes[] {
  const n = array.length;
  const animations: QuickSortTypes[] = [];

  QuickSort(array, 0, n - 1, animations);

  return animations;
}
