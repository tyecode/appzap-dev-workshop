"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const RestaurantCardSkeleton: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-custom-card">
      <div className="flex-center w-full h-[120px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="container flex gap-2 pb-2">
        <div className="w-[60px] h-[60px] rounded-full -mt-5 border-2 border-white relative bg-white">
          <Skeleton className="w-full h-full rounded-full" />
          <div
            className={cn(
              "w-4 h-4 rounded-full absolute right-0 bottom-0 bg-white border-2 border-white",
              "bg-gray-300"
            )}
          ></div>
        </div>
        <div className="flex w-full flex-row gap-2 flex-wrap flex-1">
          <div className="py-2 flex flex-col gap-2 flex-1 min-w-40">
            <div className="text-foreground text-base font-bold">
              <Skeleton className="w-40 h-4" />
            </div>
            <div className="text-sm text-muted-foreground font-normal flex gap-1">
              <Skeleton className="w-20 h-3" />
            </div>
            <div className="text-xs text-muted-foreground">
              <Skeleton className="w-32 h-3" />
            </div>
          </div>
          <div className="w-[100px] py-4">
            <Skeleton className="w-full h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
