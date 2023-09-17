import { ReactNode } from "react";

const GradiantText = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
      {children}
    </p>
  );
};

export default GradiantText;
