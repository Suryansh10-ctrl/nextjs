
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Loading = () => {
  return (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-8">
      {/* Page heading */}
      <Skeleton className="mx-auto mb-8 h-9 w-48" />

      {/* Product card skeletons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="flex h-full flex-col overflow-hidden"
          >
            {/* Product image */}
            <div className="flex h-52 items-center justify-center p-5">
              <Skeleton className="h-36 w-36 rounded-lg" />
            </div>

            {/* Product information */}
            <CardContent className="flex flex-1 flex-col p-5">
              {/* Category */}
              <Skeleton className="mb-3 h-5 w-24 rounded-full" />

              {/* Title */}
              <div className="mb-3 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              {/* Description */}
              <div className="mb-4 space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-6 w-12 rounded-md" />
                <Skeleton className="h-3 w-20" />
              </div>
            </CardContent>

            {/* Price and button */}
            <CardFooter className="mt-auto justify-between gap-3 border-t p-5">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Loading;
