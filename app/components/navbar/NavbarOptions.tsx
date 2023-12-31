"use client";

import { HiOutlineInformationCircle } from "react-icons/hi";

import useArrayStore from "@/app/hooks/useStore";

import GradiantText from "../ui/GradiantText";
import Tooltip from "../ui/Tooltip";

import { MAX, MIN } from "@/app/components/ArrayBars";
interface NavbarOptionsProps {
  disabled?: boolean;
}

const NavbarOptions: React.FC<NavbarOptionsProps> = ({ disabled }) => {
  const arrayLength = useArrayStore((state) => state.arrayLength);
  const selectedSort = useArrayStore((state) => state.selectedSort);
  const setArrayLength = useArrayStore((state) => state.setArrayLength);
  const setSelectedSort = useArrayStore((state) => state.setSelectedSort);

  // array length tooltip label
  const lenTooltipLabel = (
    <div className="font-semibold text-sm">
      <span>
        Array length and <GradiantText>animation/sorting speed</GradiantText>
        are proportional corresponding to each other
      </span>
      <div className="flex justify-center items-center gap-2 mt-2 text-sm">
        <span>
          <GradiantText>
            min:{" "}
            <span className="bg-neutral-100 px-4 rounded text-indigo-600">
              {MIN}
            </span>
          </GradiantText>
        </span>
        <span>
          <GradiantText>
            max:{" "}
            <span className="bg-neutral-100 px-4 rounded text-indigo-600">
              {MAX}
            </span>
          </GradiantText>
        </span>
      </div>
    </div>
  );

  return (
    <div className="hidden lg:flex gap-2 items-center justify-between flex-1 border-neutral-500 border-x-[2px] px-6 mx-4">
      <div className="flex flex-col gap-1 justify-center items-start w-full pr-10">
        <div className="flex gap-3">
          <div className="flex flex-row w-full">
            <label
              htmlFor="range"
              className="font-semibold text-sm lg:text-base"
            >
              Array Length
            </label>
            <Tooltip
              icon={HiOutlineInformationCircle}
              label={lenTooltipLabel}
            />
          </div>
          <div className="px-4 bg-white rounded font-semibold text-indigo-700">
            {arrayLength}
          </div>
        </div>
        <div className="w-full">
          <input
            name="range"
            id="range"
            list="data"
            type="range"
            min={MIN}
            max={MAX}
            value={arrayLength}
            disabled={disabled}
            onChange={(e) => setArrayLength(parseInt(e.target.value))}
            className="range cursor-pointer w-full accent-indigo-700 disabled:cursor-not-allowed disabled:accent-red-400"
          />
        </div>
      </div>
      <div>
        <select
          className="w-full px-6 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-600 text-neutral-600 cursor-pointer"
          name="sort_selection"
          disabled={disabled}
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
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
