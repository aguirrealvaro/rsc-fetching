import { cn } from "@/utils/cn";

export const Skeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      {Array.from(Array(16).keys()).map((key) => {
        return (
          <div key={key} className={cn("animate-pulse rounded-md bg-gray-200", "h-48")} />
        );
      })}
    </div>
  );
};
