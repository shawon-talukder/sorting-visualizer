"use client";

import { useEffect, useState } from "react";
import useArrayStore from "../hooks/useStore";

import Loading from "../loading";

export const MIN = 10;
export const MAX = 220;

const ArrayBars = () => {
  const [isLoading, setIsLoading] = useState(true);
  const array = useArrayStore((state) => state.array);

  useEffect(() => {
    if (document !== undefined) {
      setIsLoading(false);
    }
  }, []);

  // key : new Date().getTime() + index
  // bars were acting differently since document was getting same key each time
  function generateKey(pre: number) {
    return `${pre}_${new Date().getTime()}`;
  }

  const generateStyle = (height: number) => {
    return {
      height: `${height}px`,
      width: `1px`,
      maxWidth: "50px",
    };
  };

  const arrayBars = array.map((el, ind) => (
    <div
      key={generateKey(ind)}
      style={generateStyle(el)}
      className="array_bar bg-cyan-500 justify-end flex-1 rounded-t text-center text-sm"
    ></div>
  ));
  let content;

  if (!array.length || isLoading) {
    content = <Loading />;
  }
  if (!isLoading && array.length > 0) {
    content = (
      <div
        id="divContainer"
        className="flex flex-1 gap-1 justify-center items-end bg-slate-950 rounded-lg px-2 lg:px-4 py-4 lg:py-8 border border-cyan-300 h-[620px] w-full"
      >
        {arrayBars}
      </div>
    );
  }

  return content;
};

export default ArrayBars;
