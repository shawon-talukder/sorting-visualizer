"use client";

import { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";

import useArrayStore from "../hooks/useStore";

import {
  bubbleSortAnimation,
  heapSortAnimation,
  insertionSortAnimation,
  mergeSortAnimation,
  quickSortAnimation,
  selectionSortAnimation,
} from "./animations";

import Container from "./Container";
import NavbarOptions from "./navbar/NavbarOptions";
import Button from "./ui/Button";

import { generateArray } from "../utils/array";

const Navbar = () => {
  const [isLoading, setIsloading] = useState(false);

  const arrayLength = useArrayStore((state) => state.arrayLength);
  const selectedSort = useArrayStore((state) => state.selectedSort);
  const array = useArrayStore((state) => state.array);
  const setArray = useArrayStore((state) => state.setArray);

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

    // selection sort
    if (selectedSort === "selection_sort") {
      await selectionSortAnimation(array);
    }
    // insertion sort
    if (selectedSort === "insertion_sort") {
      await insertionSortAnimation(array);
    }

    // bubble sort
    if (selectedSort === "bubble_sort") {
      await bubbleSortAnimation(array);
    }
    // merge sort
    if (selectedSort === "merge_sort") {
      await mergeSortAnimation(array, arrayLength);
    }

    // quick sort
    if (selectedSort === "quick_sort") {
      await quickSortAnimation(array);
    }
    // heap sort
    if (selectedSort === "heap_sort") {
      await heapSortAnimation(array);
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
