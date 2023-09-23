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
import { AnimationTypes } from "@/app/types";
import { COMPARISON_COLOR, DIFF_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

export async function bubbleSortAnimation(array: number[]) {
  const animations: AnimationTypes[] = BubbleSort(array);

  // set delay
  const DELAY_MS = getDelayInMS(array.length);
  const arrayDivContainer = document.getElementById("divContainer");

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
      firstBar.classList.add(COMPARISON_COLOR);
      secondBar.classList.add(COMPARISON_COLOR);

      await delay(DELAY_MS);

      firstBar.classList.remove(COMPARISON_COLOR);
      secondBar.classList.remove(COMPARISON_COLOR);
    }

    const [swapFirst, swapSecond] = swap;

    if (swapFirst !== undefined && swapSecond !== undefined) {
      firstBar.classList.add(DIFF_COLOR);
      secondBar.classList.add(DIFF_COLOR);

      await delay(DELAY_MS);

      firstBar.classList.remove(DIFF_COLOR);
      secondBar.classList.remove(DIFF_COLOR);

      await delay(DELAY_MS);
      firstBar.style.height = `${swapSecond}px`;
      secondBar.style.height = `${swapFirst}px`;
    }
  }
}
