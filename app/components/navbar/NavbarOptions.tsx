"use client";

import { HiOutlineInformationCircle } from "react-icons/hi";

import { useState } from "react";
import Tooltip from "../ui/Tooltip";

const MIN = 5;
const MAX = 500;

const NavbarOptions = () => {
  const [rangeValue, setRangeValue] = useState(200);

  // array length tooltip label
  const lenTooltipLabel = (
    <p className="font-semibold text-sm">
      <span>
        Array length and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
          animation/sorting speed
        </span>{" "}
        are proportional corresponding to each other
      </span>
      <div className="flex gap-2 justify-center items-center mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 text-sm">
        <span>
          min:{" "}
          <span className="bg-white px-4 rounded text-indigo-600">{MIN}</span>
        </span>
        <span>
          max:{" "}
          <span className="bg-white px-4 rounded text-indigo-600">{MAX}</span>
        </span>
      </div>
    </p>
  );

  return (
    <div className="hidden lg:flex gap-2 items-center justify-between flex-1 border-neutral-500 border-x-[2px] px-6 mx-4">
      <div className="flex flex-col gap-1 justify-center items-start w-full pr-10">
        <div className="flex gap-3">
          <div className="flex flex-row w-full">
            <label htmlFor="#" className="font-semibold text-sm lg:text-base">
              Array Length
            </label>
            <Tooltip
              icon={HiOutlineInformationCircle}
              label={lenTooltipLabel}
            />
          </div>
          <div className="px-4 bg-white rounded font-semibold text-indigo-700">
            {rangeValue}
          </div>
        </div>
        <div className="w-full">
          <input
            list="data"
            type="range"
            min={MIN}
            max={MAX}
            value={rangeValue}
            onChange={(e) => setRangeValue(parseInt(e.target.value))}
            className="range cursor-pointer w-full accent-indigo-700 "
          />
        </div>
      </div>
      <div>
        <select
          className="w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600 text-neutral-600 cursor-pointer "
          name="sort-selection"
        >
          <option value="" hidden>
            Select Algorithm
          </option>
          <option value="selection_sort">Selection Sort</option>
          <option value="insertion_sort">Insertion Sort</option>
          <option value="bubble_sort">Bubble Sort</option>
          <option value="merge_sort">Merge Sort</option>
          <option value="quick_sort">Quick Sort</option>
          <option value="heap_sort">Heap Sort</option>
        </select>
      </div>
    </div>
  );
};

export default NavbarOptions;
