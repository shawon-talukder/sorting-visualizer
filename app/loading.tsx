"use client";

import GradiantText from "./components/ui/GradiantText";

const Loading = () => {
  return (
    <div className="h-[100vh] w-[100vw] z-10 flex justify-center items-center">
      <GradiantText>Loading...</GradiantText>
    </div>
  );
};

export default Loading;
