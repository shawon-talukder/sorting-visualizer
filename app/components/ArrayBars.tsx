"use client";

import useArrayStore from "../hooks/useStore";
import EmptyState from "./ui/EmptyState";

const MIN = 10;
const MAX = 250;

const ArrayBars = () => {
  const array = useArrayStore((state) => state.array);

  if (!array.length) {
    return (
      <div className="flex-1 bg-neutral-800 rounded py-10 h-full">
        <EmptyState subTitle="Please select array length and generate new array." />
      </div>
    );
  }

  return (
    <div className="flex flex-1 gap-1 justify-center items-end bg-slate-950 rounded-lg px-2 lg:px-4 py-4 lg:py-8 border border-cyan-300 h-[620px] w-full">
      {array.map((el, ind) => (
        <div
          key={ind}
          style={{
            height: `${el}px`,
            width: `1px`,
            maxWidth: "50px",
          }}
          className="bg-cyan-600 justify-end flex-1 rounded-t"
        ></div>
      ))}
    </div>
  );
};

export default ArrayBars;
export { MAX, MIN };
