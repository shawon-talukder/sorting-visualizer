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
import { toggleColor } from "./helper";

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
      // select two array bars that are comparing
      const firstBar = arrayDivs[first];
      const secondBar = arrayDivs[second];

      // mark two with comparison color
      await toggleColor({
        firstBar: firstBar,
        secondBar: secondBar,
        delay_ms: DELAY_MS,
        color: COMPARISON_COLOR,
      });

      await delay(DELAY_MS);

      const [toWhere, toMove] = swap;

      // if towhere is greater means duplicating the comparison.
      if (toWhere >= toMove) continue;

      // add diff color
      await toggleColor({
        firstBar: arrayDivs[toWhere],
        secondBar: arrayDivs[toMove],
        delay_ms: DELAY_MS,
        color: DIFF_COLOR,
      });

      if (toWhere < toMove) {
        // add before larger index
        arrayDivContainer?.insertBefore(arrayDivs[toMove], arrayDivs[toWhere]);
      }
    }
  }
};
