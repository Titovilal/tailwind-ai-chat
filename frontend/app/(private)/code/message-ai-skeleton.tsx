import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CornerDownLeft } from "lucide-react";
import React, { FC } from "react";

const MessageAiSkeleton: FC = () => {
  return (
    <div aria-label="Message column" className="mt-1 ">
      <Badge aria-label="Agent" className="mb-1.5 ">
        Agent
      </Badge>
      <Skeleton className="mt-0.5 h-4 rounded-lg" />
      <Skeleton className="mt-1 h-4 rounded-lg" />
      {/* <Skeleton className="mt-1 h-4 w-[120px] rounded-lg" /> */}
    </div>
  );
};
export default MessageAiSkeleton;
