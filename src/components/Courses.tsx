import * as React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const courses = [
    {
      name: "Course 1",
      price: "₹199",
      discount: "60% off",
      originalPrice: "₹500",
      image: "/mnt/data/image.png", // Placeholder image
    },
    {
      name: "Course 2",
      price: "₹3600",
      discount: "50% off",
      originalPrice: "₹7000",
      image: "/mnt/data/image.png",
    },
    {
      name: "Course 3",
      price: "₹3500",
      discount: "50% off",
      originalPrice: "₹7000",
      image: "/mnt/data/image.png",
    },
    {
      name: "Course 4",
      price: "₹199",
      discount: "60% off",
      originalPrice: "₹500",
      image: "/mnt/data/image.png",
    },
    {
      name: "Course 5",
      price: "₹3600",
      discount: "50% off",
      originalPrice: "₹7000",
      image: "/mnt/data/image.png",
    },
    {
      name: "Course 6",
      price: "₹3500",
      discount: "50% off",
      originalPrice: "₹7000",
      image: "/mnt/data/image.png",
    },
  ];
  

export function Courses() {
  return (
    <div>
              <section id="course-cards" className="text-center mt-10 pt-16">
      <h1 className="text-3xl font-bold text-black shadow-lg">
        Our Courses
      </h1>

      </section>
      <section className="mt-10 flex justify-center w-full py-10">
        <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-gray-900 w-full h-full transition-transform transform hover:scale-105"
            >
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-[30vh] w-[220px] object-cover mb-4"
                />
                <h2 className="text-white text-xl font-semibold -tracking-tight">
                  {course.name}
                </h2>
                <div className="text-white mt-2 text-center">
                  <p className="text-sm">{course.price}</p>
                  <p className="line-through text-sm">{course.originalPrice}</p>
                  <p className="text-green-500 text-sm">{course.discount}</p>
                  <button className="bg-blue-600 text-white w-48 rounded h-11 hover:bg-blue-400 mt-4">Buy Now</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
