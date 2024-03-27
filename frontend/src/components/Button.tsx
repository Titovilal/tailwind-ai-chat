import { cn } from "@/lib/classes";
import React from "react";

type Props = JSX.IntrinsicElements["button"];

const Button = ({ children, className = "", onClick, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn("px-5 py-2.5 cursor-pointer font-semibold text-sm rounded-xl", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
