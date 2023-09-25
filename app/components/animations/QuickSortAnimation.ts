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
import { QuickSortTypes } from "@/app/types";
import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

export const quickSortAnimation = async (array: number[]) => {
  const animations: QuickSortTypes[] = QuickHelper(array);

  const DELAY_MS = getDelayInMS(array.length);

  for (let i = 0; i < animations.length; i++) {
    const { swap, comparison, pivot } = animations[i];

    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    // set partition pivot's color
    arrayDivs[pivot].classList.add(MIN_COLOR);

    await delay(DELAY_MS);

    arrayDivs[pivot].classList.remove(MIN_COLOR);

    for (let j = 0; j < comparison.length; j++) {
      let [firstComp, secondComp] = comparison[j];

      if (firstComp !== undefined && secondComp !== undefined) {
        // color them with comparison color
        arrayDivs[firstComp].classList.add(COMPARISON_COLOR);
        arrayDivs[secondComp].classList.add(COMPARISON_COLOR);

        await delay(DELAY_MS);

        // remove comparison colors
        arrayDivs[firstComp].classList.remove(COMPARISON_COLOR);
        arrayDivs[secondComp].classList.remove(COMPARISON_COLOR);
      }
      if (swap.length !== 0) {
        const [firstInd, firstValue, secondInd, secondValue] = swap[j];

        if (firstInd !== undefined && secondInd !== undefined) {
          // color them with difference color
          arrayDivs[firstInd].classList.add(DIFF_COLOR);
          arrayDivs[secondInd].classList.add(DIFF_COLOR);

          await delay(DELAY_MS);

          // remove difference color
          arrayDivs[firstInd].classList.remove(DIFF_COLOR);
          arrayDivs[secondInd].classList.remove(DIFF_COLOR);

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
    arrayDivs[firstInd].classList.add(DIFF_COLOR);
    arrayDivs[secondInd].classList.add(DIFF_COLOR);

    await delay(DELAY_MS);

    // remove difference color
    arrayDivs[firstInd].classList.remove(DIFF_COLOR);
    arrayDivs[secondInd].classList.remove(DIFF_COLOR);

    // swap their value's
    arrayDivs[firstInd].style.height = `${firstValue}px`;
    arrayDivs[secondInd].style.height = `${secondValue}px`;

    await delay(DELAY_MS);
  }
};
