"use client";

import { useCallback } from "react";
import { IoMdOptions } from "react-icons/io";

import useArrayStore from "../hooks/useStore";

import { generateArray } from "../utils/array";
import Container from "./Container";
import NavbarOptions from "./navbar/NavbarOptions";
import Button from "./ui/Button";

const Navbar = () => {
  const arrayLength = useArrayStore((state) => state.arrayLength);
  const setArray = useArrayStore((state) => state.setArray);

  // handlers
  const handleGenerate = useCallback(() => {
    setArray(generateArray(arrayLength));
  }, [arrayLength, setArray]);

  return (
    <div className="w-full shadow-md z-[10] text-neutral-700">
      <Container>
        <div className="flex justify-between gap-3 md:gap-0 items-center mt-2 px-8 py-4 bg-indigo-300 rounded-md">
          <div className="flex flex-1 gap-3 md:gap-0 justify-between items-center">
            <div>
              <Button
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
                disabled
                outline={false}
                onAction={() => {}}
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
