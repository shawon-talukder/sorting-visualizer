/* 
 ***********************************************************************************************
 *
 ------->Title: Heap sort algorithm
 ->Description: Heap sort is comparison-based sorting algorithm based on Binary Heap.
 ------>Author: Shawon Talukder
 -------->Date: 09/25/2023
 *
 ***********************************************************************************************
 */

import { AnimationTypes } from "../types";

// this function is to heapify an array [max heap]
function Heapify(
  arr: number[],
  n: number,
  i: number,
  animations: AnimationTypes[]
) {
  const animation: AnimationTypes = { swap: [], comparison: [] };

  let largest = i;
  let leftChild = 2 * i + 1; // since it is 0-based indexing
  let rightChild = 2 * i + 2;

  if (leftChild < n && rightChild < n)
    animation.comparison = [leftChild, rightChild];

  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    animation.swap = [i, arr[largest], largest, arr[i], largest];

    // swap largest one with i
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    animations.push(animation);

    // call to heapify largest index also
    Heapify(arr, n, largest, animations);
  }
}

function HeapSort(arr: number[], n: number, animations: AnimationTypes[]) {
  // Build heap (rearrange array)
  // leaf nodes are (n/2)+1 to n they are already heapify
  // check for heapify at root indexes
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    Heapify(arr, n, i, animations);
  }
  let k = n - 1;
  // One by one extract an element from heap
  for (let j = n - 1; j > 0; j--) {
    // move current root to the end since it is max el of the array
    animations.push({ swap: [0, arr[j], j, arr[0], -1], comparison: [] });

    [arr[0], arr[j]] = [arr[j], arr[0]];

    // call for heapify after moving
    Heapify(arr, j, 0, animations);
  }
}

export function HeapSortHelper(arr: number[]): AnimationTypes[] {
  let n = arr.length;

  const animations: AnimationTypes[] = [];

  HeapSort(arr, n, animations);

  return animations;
}
