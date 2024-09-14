import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export function Practice() {
    return (
      <div>
        <section className="flex flex-col items-center py-16">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-black shadow-lg text-center mb-4">
          Practice Questions and Give Test
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl">
          Enhance your knowledge by solving practice questions and take tests to gauge your understanding.
          Press the button below to proceed and start your journey towards mastery!
        </p>

        {/* Button to navigate to Test Section */}
        <button
          // onClick={goToTestSection}
          className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-500 transition"
        >
          Proceed to Test
        </button>
      </section>
      </div>
    );
  }
  