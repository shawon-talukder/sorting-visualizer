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
import { AnimationTypes } from "@/app/types";
import { COMPARISON_COLOR, DIFF_COLOR, MIN_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

export const heapSortAnimation = async (array: number[]) => {
  const animations: AnimationTypes[] = HeapSortHelper(array);
  console.log(animations);
  const DELAY_MS = getDelayInMS(array.length);
  for (let i = 0; i < animations.length; i++) {
    const { comparison, swap } = animations[i];

    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    if (comparison.length > 0) {
      const [first, second] = comparison;

      // add comparison color on indexes
      arrayDivs[first].classList.add(COMPARISON_COLOR);
      arrayDivs[second].classList.add(COMPARISON_COLOR);

      await delay(DELAY_MS);

      // remove comparison colors
      arrayDivs[first].classList.remove(COMPARISON_COLOR);
      arrayDivs[second].classList.remove(COMPARISON_COLOR);
    } else {
      await delay(DELAY_MS);
    }

    const [first, firstValue, second, secondValue, last] = swap;
    if (last !== -1) {
      arrayDivs[last].classList.add(MIN_COLOR);

      await delay(DELAY_MS);

      arrayDivs[last].classList.remove(MIN_COLOR);
    }
    await delay(DELAY_MS);

    arrayDivs[first].classList.add(DIFF_COLOR);
    arrayDivs[second].classList.add(DIFF_COLOR);
    await delay(DELAY_MS);
    arrayDivs[first].classList.remove(DIFF_COLOR);
    arrayDivs[second].classList.remove(DIFF_COLOR);

    arrayDivs[first].style.height = `${firstValue}px`;
    arrayDivs[second].style.height = `${secondValue}px`;
  }
  await delay(DELAY_MS);
};
