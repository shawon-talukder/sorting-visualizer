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

  // container of all divs
  const arrayDivContainer = document.getElementById("divContainer");
  for (let i = 0; i < animations.length; i++) {
    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;

    const { comparison, swap, currentIndex } = animations[i];

    await delay(DELAY_MS);
    const currentBar = arrayDivs[currentIndex];
    // currentBar.classList.add(CURRENT_COLOR);

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

    // clear current bar color
    // currentBar.classList.remove(CURRENT_COLOR);

    // swap
    const [first, second] = swap;
    if (first === second) continue;

    const firstSwapBar = arrayDivs[first];
    const secondSwapBar = arrayDivs[second];

    // add color before swapping
    firstSwapBar.classList.add(DIFF_COLOR);
    secondSwapBar.classList.add(DIFF_COLOR);

    await delay(DELAY_MS);

    // remove colors
    firstSwapBar.classList.remove(DIFF_COLOR);
    secondSwapBar.classList.remove(DIFF_COLOR);

    // make a clone bofore swapping
    const clone1 = firstSwapBar.cloneNode(true);
    const clone2 = secondSwapBar.cloneNode(true);

    // swap
    arrayDivContainer?.replaceChild(clone2, firstSwapBar);
    arrayDivContainer?.replaceChild(clone1, secondSwapBar);

    await delay(DELAY_MS);
  }
};
