import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white pt-2">
      <div className="w-[70vw] h-[50vh] flex items-center justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="w-full flex items-center justify-center">
                <div className="p-4 w-full flex items-center justify-center">
                  <Card className="bg-gray-300 w-full h-lvh flex items-center justify-center">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold text-white">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
