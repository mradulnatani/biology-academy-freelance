import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export function Statistics() {
    return (
      <div>
        <section id="statistics" className="flex justify-center w-full py-10 pt-44">
        <div className="w-[70vw] grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-green-800 text-white text-center p-4 hover:bg-green-600">
            <CardContent>
              <h2 className="text-2xl font-bold">3K+</h2>
              <p className="mt-2 text-lg">Students Taught</p>
            </CardContent>
          </Card>

          <Card className="bg-green-800 text-white text-center p-4 hover:bg-green-600">
            <CardContent>
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="mt-2 text-lg">Years of Experience</p>
            </CardContent>
          </Card>

          <Card className="bg-green-800 text-white text-center p-4 hover:bg-green-600">
            <CardContent>
              <h2 className="text-2xl font-bold">2.5K</h2>
              <p className="mt-2 text-lg">Qualified Students</p>
            </CardContent>
          </Card>

          <Card className="bg-green-800 text-white text-center p-4 hover:bg-green-600">
            <CardContent>
              <h2 className="text-2xl font-bold">2.5K</h2>
              <p className="mt-2 text-lg">Aims Students</p>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    );
  }
  