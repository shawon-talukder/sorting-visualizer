/*
 ***********************************************************************************
 *
 ------->Title: Heap sort animation
 ->Description: this file contains animation for Heap sort
 ------>Author: Shawon Talukder
 -------->Date: 09/26/2023
 *
 ***********************************************************************************
 */

import { HeapSortHelper } from "@/app/algorithms/HeapSort";

import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { AnimationTypes } from "@/app/types";
import { toggleColor } from "./helper";

export const heapSortAnimation = async (array: number[]) => {
  const animations: AnimationTypes[] = HeapSortHelper(array);

  const DELAY_MS = getDelayInMS(array.length);
  for (let i = 0; i < animations.length; i++) {
    const { comparison, swap } = animations[i];

    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    if (comparison.length > 0) {
      const [first, second] = comparison;

      // add comparison color on indexes
      await toggleColor({
        firstBar: arrayDivs[first],
        secondBar: arrayDivs[second],
        delay_ms: DELAY_MS,
        color: COMPARISON_COLOR,
      });
    } else {
      await delay(DELAY_MS);
    }

    const [first, firstValue, second, secondValue, last] = swap;
    if (last !== -1) {
      await toggleColor({
        firstBar: arrayDivs[last],
        delay_ms: DELAY_MS,
        color: MIN_COLOR,
      });
    }

    // coloring with diff color before swap
    await toggleColor({
      firstBar: arrayDivs[first],
      secondBar: arrayDivs[second],
      delay_ms: DELAY_MS,
      color: DIFF_COLOR,
    });

    arrayDivs[first].style.height = `${firstValue}px`;
    arrayDivs[second].style.height = `${secondValue}px`;
  }
};
