
// // // export default PurchasePage;


// // "use client";

// // import React, { useState } from "react";
// // import { useParams } from "next/navigation";

// // const courses = [
// //     { name: "Course 1", price: "₹199", discount: "60% off", originalPrice: "₹500", modules: ["C++ & Basic Programming", "Arrays & Complexity", "Searching & Sorting"] },
// //     { name: "Course 2", price: "₹3600", discount: "50% off", originalPrice: "₹7000", modules: ["Char Arrays & Strings", "Basic Math & Pointers", "Recursion & Backtracking"] },
// //     { name: "Course 3", price: "₹3500", discount: "50% off", originalPrice: "₹7000", modules: ["Graph Theory", "Dynamic Programming", "Greedy Algorithms"] },
// //     { name: "Course 4", price: "₹2200", discount: "40% off", originalPrice: "₹3700", modules: ["Data Structures", "Bit Manipulation", "Trees & Graphs"] },
// //     { name: "Course 5", price: "₹2800", discount: "30% off", originalPrice: "₹4000", modules: ["Sorting Algorithms", "Heap Data Structure", "Linked Lists"] },
// //     { name: "Course 6", price: "₹3300", discount: "45% off", originalPrice: "₹6000", modules: ["Divide & Conquer", "Greedy Algorithms", "Mathematics for Programming"] },
// //     { name: "Course 7", price: "₹2500", discount: "20% off", originalPrice: "₹3200", modules: ["Advanced Recursion", "Graph Traversals", "Dynamic Programming"] }
// //   ];
  

// // const PurchasePage = () => {
// //   const params = useParams();
// //   const id = params.id;
// //   const course = courses[parseInt(id as string)];

// //   // Define the state properly for openModules
// //   const [openModules, setOpenModules] = useState<number | null>(null);

// //   if (!course) return <p>Course not found</p>;

// //   return (
// //     <div className="container mx-auto mt-10 p-6">
// //       <div className="flex flex-col md:flex-row gap-10">
// //         {/* Left Section: Course Info and Modules */}
// //         <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-bold mb-4">{course.name} - About Course</h2>
// //           <p className="text-lg mb-6">
// //             This course will cover the fundamentals of data structures and algorithms, preparing you for technical interviews and placement exams. Learn from a comprehensive curriculum that includes coding exercises and projects to enhance your programming skills.
// //           </p>

// //           {/* Comprehensive Course Modules */}
// //           <h3 className="text-xl font-bold mb-4">Comprehensive Course Modules</h3>
// //           <div>
// //             {course.modules.map((module, index) => (
// //               <div key={index} className="mb-2">
// //                 <button
// //                   className="w-full text-left text-lg bg-gray-100 p-2 rounded hover:bg-gray-200 focus:outline-none"
// //                   onClick={() => setOpenModules(openModules === index ? null : index)}
// //                 >
// //                   {module}
// //                 </button>
// //                 {openModules === index && (
// //                   <div className="bg-gray-50 p-4 text-sm">
// //                     <p>{module} content goes here. It will provide a detailed understanding of the topic.</p>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right Section: Buy Now and Pricing Info */}
// //         <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
// //           <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
// //           <p className="text-2xl text-gray-800">Price: {course.price}</p>
// //           <p className="text-lg text-gray-500 line-through">Original Price: {course.originalPrice}</p>
// //           <p className="text-lg text-green-600">Discount: {course.discount}</p>
// //           <button className="bg-blue-600 text-white w-full py-3 rounded mt-6 hover:bg-blue-400">
// //             Proceed to Buy
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PurchasePage;

"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from '~/components/Navbar'; // Import Navbar

const courses = [
  { name: "Course 1", price: "₹199", discount: "60% off", originalPrice: "₹500", image: "https://via.placeholder.com/150", modules: ["C++ & Basic Programming", "Arrays & Complexity", "Searching & Sorting"] },
  { name: "Course 2", price: "₹3600", discount: "50% off", originalPrice: "₹7000", image: "https://via.placeholder.com/150", modules: ["Char Arrays & Strings", "Basic Math & Pointers", "Recursion & Backtracking"] },
  { name: "Course 3", price: "₹3500", discount: "50% off", originalPrice: "₹7000", image: "https://via.placeholder.com/150", modules: ["Graph Theory", "Dynamic Programming", "Greedy Algorithms"] },
  { name: "Course 4", price: "₹2200", discount: "40% off", originalPrice: "₹3700", image: "https://via.placeholder.com/150", modules: ["Data Structures", "Bit Manipulation", "Trees & Graphs"] },
  { name: "Course 5", price: "₹2800", discount: "30% off", originalPrice: "₹4000", image: "https://via.placeholder.com/150", modules: ["Sorting Algorithms", "Heap Data Structure", "Linked Lists"] },
  { name: "Course 6", price: "₹3300", discount: "45% off", originalPrice: "₹6000", image: "https://via.placeholder.com/150", modules: ["Divide & Conquer", "Greedy Algorithms", "Mathematics for Programming"] },
  { name: "Course 7", price: "₹2500", discount: "20% off", originalPrice: "₹3200", image: "https://via.placeholder.com/150", modules: ["Advanced Recursion", "Graph Traversals", "Dynamic Programming"] }
];

const PurchasePage = () => {
  const params = useParams();
  const id = params.id;
  const course = courses[parseInt(id as string)];

  const [openModules, setOpenModules] = useState<number | null>(null);

  if (!course) return <p>Course not found</p>;

  return (
    <>
      {/* Navbar included at the top */}
      <Navbar />

      {/* Page content */}
      <div className="container mx-auto mt-10 p-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section: Course Info and Modules */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{course.name} - About Course</h2>
            <p className="text-lg mb-6">
              This course will cover the fundamentals of data structures and algorithms, preparing you for technical interviews and placement exams. Learn from a comprehensive curriculum that includes coding exercises and projects to enhance your programming skills.
            </p>

            {/* Comprehensive Course Modules */}
            <h3 className="text-xl font-bold mb-4">Comprehensive Course Modules</h3>
            <div>
              {course.modules.map((module, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="w-full text-left text-lg bg-gray-100 p-2 rounded hover:bg-gray-200 focus:outline-none"
                    onClick={() => setOpenModules(openModules === index ? null : index)}
                  >
                    {module}
                  </button>
                  {openModules === index && (
                    <div className="bg-gray-50 p-4 text-sm">
                      <p>{module} content goes here. It will provide a detailed understanding of the topic.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Buy Now and Pricing Info */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Add the Image at the top */}
            <img 
              src={course.image} 
              alt={course.name} 
              className="h-[200px] w-full object-cover mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
            <p className="text-2xl text-gray-800">Price: {course.price}</p>
            <p className="text-lg text-gray-500 line-through">Original Price: {course.originalPrice}</p>
            <p className="text-lg text-green-600">Discount: {course.discount}</p>
            <button className="bg-blue-600 text-white w-full py-3 rounded mt-6 hover:bg-blue-400">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
