import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

// Dummy reviews data
const reviews = [
  {
    name: "Alice Johnson",
    review: "The course content was extremely helpful and well-organized. Highly recommend!",
    rating: 5,
  },
  {
    name: "Bob Smith",
    review: "Great experience. The instructors were knowledgeable and engaging.",
    rating: 4,
  },
  {
    name: "Charlie Davis",
    review: "I learned a lot, but the pacing was a bit fast. Overall, a solid course.",
    rating: 3,
  },
  {
    name: "Diana Moore",
    review: "Fantastic course! The practical examples were very useful.",
    rating: 5,
  },
  {
    name: "Edward Wilson",
    review: "Good course, but the support could be improved.",
    rating: 3,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export function Testimonial() {
  return (
    <div>
      <u><h2 className="text-3xl font-bold pb-6 ml-20">What Our Students Say</h2></u>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-lg" // Increased max-width
      >
        <CarouselContent className="h-[300px] p-14"> {/* Increased height */}
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pt-1">
              <div className="">
                <Card className="w-full h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <StarRating rating={review.rating} />
                    <p className="mt-2 text-lg font-semibold">{review.name}</p>
                    <p className="mt-2 text-base">{review.review}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}
