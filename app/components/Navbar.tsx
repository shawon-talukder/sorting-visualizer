"use client";

import { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";

import useArrayStore from "../hooks/useStore";

import Container from "./Container";
import NavbarOptions from "./navbar/NavbarOptions";
import Button from "./ui/Button";

import { MergeHelper } from "../algorithms/MergeSort";

import { AnimationTypes } from "../types/index";
import { generateArray } from "../utils/array";
import { COMPARISON_COLOR, DIFF_COLOR } from "../utils/constants";
import { delay, getDelayInMS } from "../utils/delay";

const Navbar = () => {
  const [isLoading, setIsloading] = useState(false);

  const arrayLength = useArrayStore((state) => state.arrayLength);
  const selectedSort = useArrayStore((state) => state.selectedSort);
  const array = useArrayStore((state) => state.array);
  const setArray = useArrayStore((state) => state.setArray);

  // set delay
  const DELAY_MS = getDelayInMS(arrayLength);

  useEffect(() => {
    setArray(generateArray(arrayLength));
  }, [arrayLength, setArray]);

  // handlers

  // handler to generate new array
  const handleGenerate = () => {
    setArray(generateArray(arrayLength));
  };

  const handleSorting = async () => {
    setIsloading(true);

    if (selectedSort === "merge_sort") {
      const animations: AnimationTypes[] = MergeHelper(array, arrayLength);

      const arrayDivContainer = document.getElementById("divContainer");

      for (let i = 0; i < animations.length; i++) {
        const arrayDivs = document.getElementsByClassName(
          "array_bar"
        ) as HTMLCollectionOf<HTMLElement>;

        const { swap, comparison } = animations[i];

        // comparison functionality
        const [first, second] = comparison;

        if (first !== undefined && second !== undefined) {
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
            arrayDivContainer?.insertBefore(
              arrayDivs[toMove],
              arrayDivs[toWhere]
            );
          }
        }
      }
    }
    setIsloading(false);
  };

  return (
    <div className="w-full shadow-md z-[10] text-neutral-700">
      <Container>
        <div className="flex justify-between gap-3 md:gap-0 items-center mt-2 px-8 py-4 bg-indigo-300 rounded-md">
          <div className="flex flex-1 gap-3 md:gap-0 justify-between items-center">
            <div>
              <Button
                disabled={isLoading}
                label="Generate New Array"
                isSecondary
                outline
                onAction={handleGenerate}
              />
            </div>
            <NavbarOptions disabled={isLoading} />
            <div>
              <Button
                label="Sort"
                disabled={!selectedSort || array.length === 0 || isLoading}
                outline={false}
                onAction={handleSorting}
              />
            </div>
          </div>
          <IoMdOptions
            size={32}
            className="lg:hidden text-neutral-800 border-neutral-500 border-l-[2px] pl-1 cursor-pointer"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
