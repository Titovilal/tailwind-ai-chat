import React, { ComponentProps } from "react";

type Props = {
  className?: string;
  icon: string;
} & ComponentProps<"i">;

const IconButton = ({ className, icon, onClick, ...rest }: Props) => {
  return (
    <i
      {...rest}
      onClick={onClick}
      className={`material-symbols-outlined ${className}`}
    >
      {icon}
    </i>
  );
};

export default IconButton;
