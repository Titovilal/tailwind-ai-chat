import React, { ComponentProps } from "react";
import Button from "./Button";
import { cn } from "@/lib/classes";

type Props = ComponentProps<typeof Button> & {
  icon: string;
  color?: string;
};

const IconButton = ({
  children,
  className = "",
  icon,
  color,
  ...rest
}: Props) => {
  return (
    <Button
      {...rest}
      className={cn(
        "flex size-10 items-center justify-center  rounded-xl",
        className
      )}
    >
      <i className={`material-symbols-outlined  ${color}`}>{icon}</i>
      {children}
    </Button>
  );
};

export default IconButton;
