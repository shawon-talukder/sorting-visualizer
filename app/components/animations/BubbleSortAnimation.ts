/*
 ***********************************************************************************
 *
 ------->Title: Insertion sort animation
 ->Description: this file contains animation for bubble sort
 ------>Author: Shawon Talukder
 -------->Date: 09/23/2023
 *
 ***********************************************************************************
 */

import { BubbleSort } from "@/app/algorithms/BubbleSort";

import { COMPARISON_COLOR, DIFF_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { AnimationTypes } from "@/app/types";
import { toggleColor } from "./helper";

export async function bubbleSortAnimation(array: number[]) {
  const animations: AnimationTypes[] = BubbleSort(array);

  // set delay
  const DELAY_MS = getDelayInMS(array.length);

  for (let i = 0; i < animations.length; i++) {
    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    // destructuring animation
    const { comparison, swap } = animations[i];

    const [first, second] = comparison;

    let firstBar = arrayDivs[first];
    let secondBar = arrayDivs[second];

    if (first !== undefined && second !== undefined) {
      await toggleColor({
        firstBar: firstBar,
        secondBar: secondBar,
        delay_ms: DELAY_MS,
        color: COMPARISON_COLOR,
      });
    }

    const [swapFirst, swapSecond] = swap;

    if (swapFirst !== undefined && swapSecond !== undefined) {
      await toggleColor({
        firstBar: firstBar,
        secondBar: secondBar,
        delay_ms: DELAY_MS,
        color: DIFF_COLOR,
      });

      await delay(DELAY_MS);
      firstBar.style.height = `${swapSecond}px`;
      secondBar.style.height = `${swapFirst}px`;
    }
  }
}
