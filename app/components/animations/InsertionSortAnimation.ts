/*
 ***********************************************************************************
 *
 ------->Title: Insertion sort animation
 ->Description: this file contains animation for insertion sort
 ------>Author: Shawon Talukder
 -------->Date: 09/23/2023
 *
 ***********************************************************************************
 */

import { InsertionSort } from "@/app/algorithms/InsertionSort";

import { COMPARISON_COLOR, DIFF_COLOR } from "@/app/utils/constants";
import { delay, getDelayInMS } from "@/app/utils/delay";

import { NestedSortTypes } from "@/app/types";
import { toggleColor } from "./helper";

export async function insertionSortAnimation(array: number[]) {
  // constants
  const DELAY_MS = getDelayInMS(array.length);

  // get animations from algorithm
  const animations: NestedSortTypes[] = InsertionSort(array);

  for (let i = 0; i < animations.length; i++) {
    const arrayDivs = document.getElementsByClassName(
      "array_bar"
    ) as HTMLCollectionOf<HTMLElement>;
    const { comparison, swap, currentIndex } = animations[i];

    await delay(DELAY_MS);

    // loop through all comparisons
    for (let j = 0; j < comparison.length; j++) {
      const [compareInd, second, value] = comparison[j];

      if (second !== -1 && value !== -1) {
        // comparison two index
        await toggleColor({
          firstBar: arrayDivs[compareInd],
          secondBar: arrayDivs[second],
          delay_ms: DELAY_MS,
          color: COMPARISON_COLOR,
        });

        // remove compareInd index
        await toggleColor({
          firstBar: arrayDivs[second],
          delay_ms: DELAY_MS,
          color: DIFF_COLOR,
        });

        // means greater value at second index (comparison.second) will be the height of third value
        arrayDivs[second].style.height = `${value}px`;
      } else {
        // comparison two index
        await toggleColor({
          firstBar: arrayDivs[currentIndex],
          secondBar: arrayDivs[compareInd],
          delay_ms: DELAY_MS,
          color: COMPARISON_COLOR,
        });
      }
    }

    // destructuring index and value
    const [index, value] = swap;

    // set the height of current index
    arrayDivs[index].style.height = `${value}px`;
  }
}
