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

import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { NestedSortTypes } from "@/app/types";
import { toggleColor } from "./helper";

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
      await toggleColor({
        color: COMPARISON_COLOR,
        delay_ms: DELAY_MS,
        firstBar: arrayDivs[first],
        secondBar: arrayDivs[second],
      });

      let minDiv;
      if (min_index !== undefined) {
        minDiv = arrayDivs[min_index];
      } else {
        minDiv = arrayDivs[second];
      }

      // min element coloring
      await toggleColor({
        firstBar: minDiv,
        color: MIN_COLOR,
        delay_ms: DELAY_MS,
      });
    }

    await delay(DELAY_MS);

    // swap
    const [firstInd, firstValue, secondInd, secondValue] = swap;
    if (firstInd === secondInd) continue;

    const firstSwapBar = arrayDivs[firstInd];
    const secondSwapBar = arrayDivs[secondInd];

    // add color before swapping
    await toggleColor({
      color: DIFF_COLOR,
      firstBar: firstSwapBar,
      secondBar: secondSwapBar,
      delay_ms: DELAY_MS,
    });

    // swap
    firstSwapBar.style.height = `${secondValue}px`;
    secondSwapBar.style.height = `${firstValue}px`;

    await delay(DELAY_MS);
  }
};
