/*
 ***********************************************************************************
 *
 ------->Title: Quick sort animation
 ->Description: this file contains animation for quick sort
 ------>Author: Shawon Talukder
 -------->Date: 09/25/2023
 *
 ***********************************************************************************
 */

import { QuickHelper } from "@/app/algorithms/QuickSort";

import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { QuickSortTypes } from "@/app/types";
import { toggleColor } from "./helper";

export const quickSortAnimation = async (array: number[]) => {
  const animations: QuickSortTypes[] = QuickHelper(array);

  const DELAY_MS = getDelayInMS(array.length);

  for (let i = 0; i < animations.length; i++) {
    const { swap, comparison, pivot } = animations[i];

    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    // set partition pivot's color
    await toggleColor({
      firstBar: arrayDivs[pivot],
      delay_ms: DELAY_MS,
      color: MIN_COLOR,
    });

    for (let j = 0; j < comparison.length; j++) {
      let [firstComp, secondComp] = comparison[j];

      if (firstComp !== undefined && secondComp !== undefined) {
        // color them with comparison color
        await toggleColor({
          firstBar: arrayDivs[firstComp],
          secondBar: arrayDivs[secondComp],
          color: COMPARISON_COLOR,
          delay_ms: DELAY_MS,
        });
      }
      if (swap.length !== 0) {
        const [firstInd, firstValue, secondInd, secondValue] = swap[j];

        if (firstInd !== undefined && secondInd !== undefined) {
          // color them with difference color
          await toggleColor({
            firstBar: arrayDivs[firstInd],
            secondBar: arrayDivs[secondInd],
            delay_ms: DELAY_MS,
            color: DIFF_COLOR,
          });

          // swap their value's
          arrayDivs[firstInd].style.height = `${firstValue}px`;
          arrayDivs[secondInd].style.height = `${secondValue}px`;
        }
      }
    }

    // last swap with pivot value
    const [firstInd, firstValue, secondInd, secondValue] =
      swap[comparison.length];

    // color them with difference color
    await toggleColor({
      firstBar: arrayDivs[firstInd],
      secondBar: arrayDivs[secondInd],
      delay_ms: DELAY_MS,
      color: DIFF_COLOR,
    });

    // swap their value's
    arrayDivs[firstInd].style.height = `${firstValue}px`;
    arrayDivs[secondInd].style.height = `${secondValue}px`;

    await delay(DELAY_MS);
  }
};
