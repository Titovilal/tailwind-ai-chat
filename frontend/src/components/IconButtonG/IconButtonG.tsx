import React from "react";

type Props = JSX.IntrinsicElements["button"] & {
  icon?: string;
  classNameIcon?: string;
};

const IconButtonG = ({
  children,
  className = "",
  onClick,
  icon,
  classNameIcon = "",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`flex cursor-pointer rounded-full hover:bg-gray-600 active:bg-gray-700 p-1 ${className}`}
      onClick={onClick}
    >
      <i className={`material-symbols-outlined  ${classNameIcon}`}>{icon}</i>
      {children}
    </button>
  );
};

export default IconButtonG;
