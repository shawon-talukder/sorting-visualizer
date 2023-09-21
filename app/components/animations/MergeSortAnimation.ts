/*
 ***********************************************************************************
 *
 ------->Title: Merge sort animation
 ->Description: this file contains animation for merge sort
 ------>Author: Shawon Talukder
 -------->Date: 09/22/2023
 *
 ***********************************************************************************
 */

import { MergeHelper } from "@/app/algorithms/MergeSort";

import { COMPARISON_COLOR, DIFF_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { AnimationTypes } from "@/app/types";

export const mergeSortAnimation = async (
  array: number[],
  arrayLength: number
) => {
  const animations: AnimationTypes[] = MergeHelper(array, arrayLength);
  // set delay
  const DELAY_MS = getDelayInMS(arrayLength);
  const arrayDivContainer = document.getElementById("divContainer");

  for (let i = 0; i < animations.length; i++) {
    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    const { swap, comparison } = animations[i];

    // comparison functionality
    const [first, second] = comparison;

    if (first !== undefined && second !== undefined) {
      // delay for a second
      await delay(DELAY_MS);

      // select two array bars that are comparing
      const firstBar = arrayDivs[first];
      const secondBar = arrayDivs[second];

      // mark two with comparison color
      firstBar.classList.add(COMPARISON_COLOR);
      secondBar.classList.add(COMPARISON_COLOR);

      // set a delay and remove comparison color
      await delay(DELAY_MS);

      firstBar.classList.remove(COMPARISON_COLOR);
      secondBar.classList.remove(COMPARISON_COLOR);

      await delay(DELAY_MS);

      const [toWhere, toMove] = swap;

      // if towhere is greater means duplicating the comparison.
      if (toWhere >= toMove) continue;

      // add diff color
      arrayDivs[toWhere].classList.add(DIFF_COLOR);
      arrayDivs[toMove].classList.add(DIFF_COLOR);

      await delay(DELAY_MS * 2);

      // remove the diff colors
      arrayDivs[toWhere].classList.remove(DIFF_COLOR);
      arrayDivs[toMove].classList.remove(DIFF_COLOR);

      if (toWhere < toMove) {
        // add before larger index
        arrayDivContainer?.insertBefore(arrayDivs[toMove], arrayDivs[toWhere]);
      }
    }
  }
};
