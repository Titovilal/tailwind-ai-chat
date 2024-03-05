import { ComponentProps } from "react";
import Button from "./Button";
import { cn } from "@/lib/classes";

type Props = ComponentProps<typeof Button>;

const PrimaryButton = ({ children, className = "", ...rest }: Props) => {
  return (
    <Button
      {...rest}
      className={cn(
        "bg-primary text-neutral hover:bg-primary-500 active:bg-primary-600 focus:outline-none",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
