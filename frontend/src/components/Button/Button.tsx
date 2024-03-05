import React from "react";

type Props = JSX.IntrinsicElements["button"];

const Button = ({ children, className = "", onClick, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 text-white cursor-pointer font-semibold rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
