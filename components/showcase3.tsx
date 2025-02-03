import { OutFit } from "@/app/fonts";
import { Outfit } from "next/font/google";
import React from "react";

const testmonials = [
  {
    id: "01",
    title: "KrishnaMurthy",
    description: "Tomato Farmer • 10 acers of land ",
    bgColor: "hover:bg-blue-50",
  },

  {
    id: "02",
    title: "RamaKrishna",
    description: "Rice Farmer • 15 acres of land",
    bgColor: "hover:bg-green-50",
  },
  {
    id: "03",
    title: "Lakshmi Devi",
    description: "Mango Farmer • 8 acres of land",
    bgColor: "hover:bg-yellow-50",
  },
  {
    id: "04",
    title: "Srinivas Reddy",
    description: "Cotton Farmer • 12 acres of land",
    bgColor: "hover:bg-red-50",
  },
];

function App() {
  return (
    <div className="min-h-screen cursor-pointer bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl font-bold  text-center mb-16  ${OutFit.className}`}
        >
          Testimonials
        </h1>

        <div className="space-y-2">
          {testmonials.map((service) => (
            <div
              key={service.id}
              className={`group  border-b border-gray-100 py-8 transition-all duration-300 ease-in-out ${service.bgColor}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={` ${OutFit.className} text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300`}
                >
                  {service.id}
                </span>

                <div className="flex-grow px-16">
                  <h2
                    className={`text-3xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 ${OutFit.className}`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`text-gray-500 group-hover:text-gray-600 ${OutFit.className}`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
