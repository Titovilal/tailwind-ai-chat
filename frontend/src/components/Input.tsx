import { cn } from "@/lib/classes";
import { ReactNode, forwardRef } from "react";

type Props = Omit<
  JSX.IntrinsicElements["input"],
  "ref" | "onChange" | "onBlur" | "onFocus" | "children"
> & {
  onChange?: (text: string) => void;
  onBlur?: (text: string) => void;
  onFocus?: (text: string) => void;
  children?: (text: string) => ReactNode;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { onChange, className = "", onBlur, onFocus, children, value, ...rest },
    ref
  ) => {
    return (
      <>
        <input
          {...rest}
          value={value}
          onBlur={(e) => onBlur?.(e.target.value)}
          onFocus={(e) => onFocus?.(e.target.value)}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            "text-sm w-full px-4 py-2 rounded-xl focus:outline-none",
            className
          )}
          ref={ref}
        />

        {children?.(value?.toString() ?? "")}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
