"use client";

interface ButtonProps {
  label: string;
  onAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isSecondary?: boolean;
  small?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onAction,
  disabled,
  isSecondary,
  outline,
  small,
}) => {
  return (
    <button
      className={`relative w-full font-semibold rounded-md transform transition
      hover:opacity-90 active:translate-y-[1px]  
      disabled:opacity-70 disabled:cursor-not-allowed 
      ${outline ? "border-2 border-indigo-600" : ""}
       ${small ? "px-2" : "px-4"}
      ${small ? "py-1" : "py-2"}
      ${isSecondary ? "bg-white" : "bg-indigo-600 text-white"}`}
      onClick={onAction}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
