"use client";

import useArrayStore from "../hooks/useStore";

import Loading from "../loading";

const MIN = 10;
const MAX = 250;

const ArrayBars = () => {
  const array = useArrayStore((state) => state.array);

  if (!array.length) {
    return <Loading />;
  }

  return (
    <div id="divContainer" className="flex flex-1 gap-1 justify-center items-end bg-slate-950 rounded-lg px-2 lg:px-4 py-4 lg:py-8 border border-cyan-300 h-[620px] w-full">
      {array.map((el, ind) => (
        <div
          key={ind}
          style={{
            height: `${el}px`,
            width: `1px`,
            maxWidth: "50px",
          }}
          className="array_bar bg-cyan-600 justify-end flex-1 rounded-t"
        ></div>
      ))}
    </div>
  );
};

export default ArrayBars;
export { MAX, MIN };
