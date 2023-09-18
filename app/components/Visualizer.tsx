"use client";

import { Suspense } from "react";

import Loading from "../loading";
import ArrayBars from "./ArrayBars";
import Container from "./Container";

const Visualizer = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-2 justify-between items-center mt-2 lg:h-full ">
        <Suspense fallback={<Loading />} >
          <ArrayBars />
        </Suspense>
      </div>
    </Container>
  );
};

export default Visualizer;
