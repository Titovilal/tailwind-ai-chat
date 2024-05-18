import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CornerDownLeft } from "lucide-react";
import React, { FC } from "react";

const MeesageAiSkeleton: FC = () => {
  return (
    <div aria-label="Chat message" className="group">
      <div aria-label="Message column" className="mt-1 ">
        <Badge aria-label="Agent" className="mb-1.5 ">
          Agent
        </Badge>
        <p
          aria-label="Content"
          className="text-sm text-foreground tracking-tight"
        ></p>
        <Skeleton className="mt-2 w-full h-[20px] rounded-lg" />
        <Skeleton className="mt-2 w-full h-[20px] rounded-lg" />
        <Skeleton className="mt-3 w-[120px] h-[20px] rounded-lg" />
      </div>
    </div>
  );
};
export default MeesageAiSkeleton;
