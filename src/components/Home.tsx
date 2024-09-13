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

export function Home() {
  return (
    <div className="min-h-screen bg-white pt-2">
      {/* Carousel Section */}
      <div className="w-full flex justify-center">
        <div className="w-[70vw] h-[50vh]">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-4 w-full">
                    <Card className="bg-gray-300 w-full h-[50vh] flex items-center justify-center">
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
      
       {/* Separate Container for Statistics */}
       {/* <div className="mt-16 flex justify-center w-full">
         <div className="w-[70vw] grid grid-cols-1 md:grid-cols-4 gap-8">
           <Card className="bg-gray-800 text-white text-center p-6">
             <CardContent>
               <h2 className="text-3xl font-bold">3K+</h2>
               <p className="mt-2 text-xl">Students Taught</p>
             </CardContent>
           </Card>

           <Card className="bg-gray-800 text-white text-center p-6">
             <CardContent>
               <h2 className="text-3xl font-bold">20+</h2>
               <p className="mt-2 text-xl">Years of Experience</p>
             </CardContent>
           </Card>

           <Card className="bg-gray-800 text-white text-center p-6">
             <CardContent>
               <h2 className="text-3xl font-bold">Qualified Students</h2>
               <p className="mt-2 text-xl">Numbers to be added</p>
             </CardContent>
           </Card>

           <Card className="bg-gray-800 text-white text-center p-6">
             <CardContent>
               <h2 className="text-3xl font-bold">Aims Students</h2>
               <p className="mt-2 text-xl">Numbers to be added</p>
             </CardContent>
           </Card>
         </div>
       </div> */}
       {/* Separate Container for Statistics */}
  <div className="mt-16 flex justify-center w-full">
    <div className="w-[70vw] grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Adjust gap and sizing */}
      <Card className="bg-green-700 text-white text-center p-4"> {/* Changed to match navbar color */}
        <CardContent>
          <h2 className="text-2xl font-bold text-center">3K+</h2> {/* Adjusted font-size */}
          <p className="mt-2 text-lg text-center">Students Taught</p> {/* Adjusted font-size */}
        </CardContent>
      </Card>

      <Card className="bg-green-700 text-white text-center p-4">
        <CardContent>
          <h2 className="text-2xl font-bold text-center">20+</h2>
          <p className="mt-2 text-lg text-center">Years of Experience</p>
        </CardContent>
      </Card>

      <Card className="bg-green-700 text-white text-center p-4">
        <CardContent>
          <h2 className="text-2xl font-bold text-center">2.5K</h2> {/* Set to 2.5K */}
          <p className="mt-2 text-lg text-center">Qualified Students</p>
        </CardContent>
      </Card>

      <Card className="bg-green-700 text-white text-center p-4">
        <CardContent>
          <h2 className="text-2xl font-bold text-center">2.5K</h2> {/* Set to 2.5K */}
          <p className="mt-2 text-lg text-center">Aims Students</p>
        </CardContent>
      </Card>
    </div>
  </div>


   {/* Carousel Section for Courses */}
   {/* <div className="mt-16 flex justify-center w-full">
        <div className="w-[70vw] h-[50vh]">
          <Carousel className="w-full">
            <CarouselContent>
              {courses.map((course, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-4 w-full">
                    <Card className="bg-gray-300 w-full h-[50vh] flex items-center justify-center">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="h-[100px] w-[100px] object-cover"
                        />
                        <span className="text-2xl font-semibold text-white mt-4">
                          {course.name}
                        </span>
                        <div className="text-white mt-2">
                          <p className="text-lg">{course.price}</p>
                          <p className="line-through">{course.originalPrice}</p>
                          <p className="text-green-500">{course.discount}</p>
                        </div>
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
      </div> */}

      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Recorded Courses</h1>
      </div>
      {/* Courses Cards Section */}
      <div className="mt-10 flex justify-center w-full">
        <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="bg-gray-900 w-full h-full">
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-[120px] w-[120px] object-cover mb-4"
                />
                <h2 className="text-white text-lg font-semibold">
                  {course.name}
                </h2>
                <div className="text-white mt-2">
                  <p className="text-sm">{course.price}</p>
                  <p className="line-through text-sm">{course.originalPrice}</p>
                  <p className="text-green-500 text-sm">{course.discount}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* What our Student Says */}

      {/* Footer */}

    </div>
  );
}


