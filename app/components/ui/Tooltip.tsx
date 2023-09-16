"use client";

import { ReactElement } from "react";
import { IconType } from "react-icons";

interface TooltipProps {
  icon: IconType;
  label: ReactElement<any, any>;
}

const Tooltip: React.FC<TooltipProps> = ({ icon: Icon, label: Label }) => {
  return (
    <div className="group relative hidden md:block">
      <Icon
        size={16}
        className="text-neutral-600 cursor-pointer hover:text-neutral-200"
      />
      <span className="absolute hidden group-hover:block min-w-[300px] max-w-[400px] border-2 border-indigo-500 rounded-lg bg-neutral-800 text-neutral-200 px-4 py-4 top-3 left-2 text-center">
        {Label}
      </span>
    </div>
  );
};

export default Tooltip;
