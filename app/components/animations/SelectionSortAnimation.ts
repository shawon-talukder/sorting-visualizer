/*
 ***********************************************************************************
 *
 ------->Title: Selection sort animation
 ->Description: this file contains animation for selection sort
 ------>Author: Shawon Talukder
 -------->Date: 09/22/2023
 *
 ***********************************************************************************
 */

import { SelectionSort } from "@/app/algorithms/SelectionSort";

import { NestedSortTypes } from "@/app/types";
import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

export const selectionSortAnimation = async (array: number[]) => {
  const animations: NestedSortTypes[] = SelectionSort(array);

  // get delay in miliseconds againt the array length
  const DELAY_MS = getDelayInMS(array.length);

  for (let i = 0; i < animations.length; i++) {
    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    const { comparison, swap } = animations[i];

    await delay(DELAY_MS);

    // loop to showcase the traversal of rest of the array
    for (let j = 0; j < comparison.length; j++) {
      const [first, second, min_index] = comparison[j];

      // first and second is comparing index
      // third one is for minimum value's index
      // add comparison colors
      arrayDivs[first].classList.add(COMPARISON_COLOR);
      arrayDivs[second].classList.add(COMPARISON_COLOR);

      // delay and remove the comparison colors
      await delay(DELAY_MS);

      arrayDivs[first].classList.remove(COMPARISON_COLOR);
      arrayDivs[second].classList.remove(COMPARISON_COLOR);

      let minDiv;
      if (min_index !== undefined) {
        minDiv = arrayDivs[min_index];
      } else {
        minDiv = arrayDivs[second];
      }

      minDiv.classList.add(MIN_COLOR);

      await delay(DELAY_MS);

      minDiv.classList.remove(MIN_COLOR);
    }

    await delay(DELAY_MS);

    // swap
    const [firstInd, firstValue, secondInd, secondValue] = swap;
    if (firstInd === secondInd) continue;

    const firstSwapBar = arrayDivs[firstInd];
    const secondSwapBar = arrayDivs[secondInd];

    // add color before swapping
    firstSwapBar.classList.add(DIFF_COLOR);
    secondSwapBar.classList.add(DIFF_COLOR);

    await delay(DELAY_MS);

    // remove colors
    firstSwapBar.classList.remove(DIFF_COLOR);
    secondSwapBar.classList.remove(DIFF_COLOR);

    // swap
    firstSwapBar.style.height = `${secondValue}px`;
    secondSwapBar.style.height = `${firstValue}px`;

    await delay(DELAY_MS);
  }
};
