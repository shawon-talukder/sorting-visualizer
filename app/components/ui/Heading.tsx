"use client";

import { ReactNode } from "react";

import GradiantText from "./GradiantText";

interface HeadingProps {
  small?: boolean;
  gradiant?: boolean;
  children: ReactNode;
  className: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  small,
  gradiant,
  className,
}) => {
  let content;

  // if gradiant is passed, add gradiant text color
  if (gradiant) {
    content = <GradiantText>{children}</GradiantText>;
  } else {
    content = <>{children}</>;
  }
  return (
    <h1
      className={`
      ${small ? "mt-1" : "mt-2"}
      ${small ? "text-lg" : "text-2xl"} 
      ${className}
      `}
    >
      {content}
    </h1>
  );
};

export default Heading;
