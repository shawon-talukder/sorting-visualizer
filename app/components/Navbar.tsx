"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";

import useArrayStore from "../hooks/useStore";

import Container from "./Container";
import NavbarOptions from "./navbar/NavbarOptions";
import Button from "./ui/Button";

import { MergeHelper } from "../algorithms/MergeSort";
import { AnimationTypes } from "../types/index";
import { generateArray } from "../utils/array";
import { delay } from "../utils/delay";

const COMPARISON_COLOR = "bg-blue-300";
const DIFF_COLOR = "bg-red-300";

const Navbar = () => {
  const [isLoading, setIsloading] = useState(false);

  const arrayLength = useArrayStore((state) => state.arrayLength);
  const selectedSort = useArrayStore((state) => state.selectedSort);
  const array = useArrayStore((state) => state.array);

  const setArray = useArrayStore((state) => state.setArray);

  // set delay
  const DELAY = arrayLength > 200 ? 10 : arrayLength > 100 ? 30 : 50;

  useEffect(() => {
    setArray(generateArray(arrayLength));
  }, [arrayLength, setArray]);

  // handlers
  const handleGenerate = useCallback(() => {
    setArray(generateArray(arrayLength));
  }, [arrayLength, setArray]);

  const handleSorting = async () => {
    setIsloading(true);

    if (selectedSort === "merge_sort") {
      const animations: AnimationTypes[] = MergeHelper(array, arrayLength);

      const arrayDivContainer = document.getElementById("divContainer");

      for (let i = 0; i < animations.length; i++) {
        // await delay(DELAY);
        const arrayDivs = document.getElementsByClassName(
          "array_bar"
        ) as HTMLCollectionOf<HTMLElement>;
        let { swap, comparison } = animations[i];

        // comparison functionality
        const [first, second] = comparison;
        console.log(comparison, swap);
        if (first !== undefined && second !== undefined) {
          const firstBar = arrayDivs[first];
          const secondBar = arrayDivs[second];

          firstBar.classList.add(COMPARISON_COLOR);
          secondBar.classList.add(COMPARISON_COLOR);

          await delay(DELAY);
          // firstBar.classList.remove(COMPARISON_COLOR);
          // secondBar.classList.remove(COMPARISON_COLOR);

          const [toWhere, toMove] = swap;
          // if (toWhere === toMove) {
          //   // arrayDivs[toWhere].classList.add("bg-orange-400");
          // } else {
          //   // arrayDivs[toWhere].classList.add("bg-red-400");
          //   // arrayDivs[toMove].classList.add("bg-red-400");
          // }

          await delay(DELAY);
          if (toWhere < toMove) {
            // add before current index
            arrayDivContainer?.insertBefore(
              arrayDivs[toMove],
              arrayDivs[toWhere]
            );
          }

          // await delay(DELAY);
          // // remove the element and add before index
          // arrayDivContainer?.removeChild(secondBar);

          // await delay(DELAY);
          // if (toWhere === toMove) {
          //   arrayDivs[toWhere].classList.remove("bg-orange-400");
          // } else {
          //   arrayDivs[toWhere].classList.remove("bg-red-400");
          //   arrayDivs[toMove].classList.remove("bg-red-400");
          // }
        }
      }
    }

    //
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
            <NavbarOptions />
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
