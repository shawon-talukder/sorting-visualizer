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

function Partition(arr: number[], low: number, high: number): number {
  // choosing last element as pivot
  let pivot = arr[high];

  // Index of smaller element and indicates
  // the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // increment position for smaller element
      i++;
      // swap elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // swap smaller element with high value
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function QuickSort(array: number[], low: number, high: number) {
  if (low >= high) return;

  let pivot = Partition(array, low, high);

  // recursive call to partition and sort the before and after element of pivot
  // before elements
  QuickSort(array, low, pivot - 1);
  // after elements
  QuickSort(array, pivot + 1, high);
}

export function QuickHelper(array: number[]) {
  const n = array.length;
  QuickSort(array, 0, n - 1);
}
