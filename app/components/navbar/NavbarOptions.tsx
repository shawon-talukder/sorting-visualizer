"use client";
import { HiOutlineInformationCircle } from "react-icons/hi";

import Tooltip from "../ui/Tooltip";

const NavbarOptions = () => {
  // array length tooltip label
  const lenTooltipLabel = (
    <p className="font-semibold text-sm">
      Array length and{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
        animation/sorting speed
      </span>{" "}
      are proportional corresponding to each other
    </p>
  );

  return (
    <div className="hidden lg:flex items-center justify-between flex-1 border-neutral-500 border-x-[2px] px-6 mx-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-start w-full">
          <label htmlFor="#" className="font-semibold text-sm lg:text-base">
            Array Length
          </label>
          <Tooltip icon={HiOutlineInformationCircle} label={lenTooltipLabel} />
        </div>
      </div>
      <div>logo</div>
      <div></div>
    </div>
  );
};

export default NavbarOptions;
