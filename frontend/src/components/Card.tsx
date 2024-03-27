import { cn } from "@/lib/classes";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Card = ({ className, children }: Props) => {
  return (
    <div className={cn("w-full rounded-xl shadow p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
