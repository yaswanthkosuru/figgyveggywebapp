"use client";
import Image from "next/image";
import { InterSans, OutFit } from "./fonts";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".word"); // Select all words
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top bottom",
        end: "bottom center",
        markers: false,
        scrub: true,
        onUpdate: (self) => {
          const highlightIndex = Math.floor(
            gsap.utils.mapRange(0, 1, 0, words.length, self.progress)
          );

          words.forEach((word, index) => {
            gsap.to(word, {
              color:
                index <= highlightIndex
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.4)",
            });
          });
        },
      });
    },
    { scope: aboutRef }
  );

  // Split text into words
  const text =
    " we are committed to empowering farmers and agricultural communities with the tools they need to succeed. We specialize in providing high-quality, scientifically-backed pesticides and fertilizers designed to promote healthy, sustainable farming practices. Our goal is to improve crop yield, ensure soil health, and protect plants from pests, diseases, and environmental stressors.";
  const words = text.split(" ").map((word, index) => (
    <span
      key={index}
      className={`${InterSans.className} tracking-wider  text-balance md:font-[400px] md:text-2xl word text-white/40`}
    >
      {word}{" "}
    </span>
  ));

  return (
    <div>
      <h1 className="text-white uppercase text-md md:text-4xl">About Us</h1>
      <div className="mt-4"></div>
      <div ref={aboutRef} className="">
        {words}
      </div>
    </div>
  );
};

const BentoImages = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="max-w-[30rem] mx-auto">
          <About />
        </div>
        <div className="flex justify-between w-[90%] gap-4  mx-auto">
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-56 rounded-[45%] max-w-40">
            <Image src="/farmer.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40">
            <Image src="/garden.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
        <div className="">
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40 mx-auto">
            <Image src="/sunset2.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between w-[90%] gap-4  mx-auto">
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-56 rounded-[45%] max-w-40">
            <Image src="/farmer.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
          <div className="max-w-[42rem] mx-auto">
            <About />
          </div>
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40">
            <Image src="/garden.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
        <div className="">
          <div className="bg-red-200 overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-60 mx-auto">
            <Image src="/sunset2.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
      </div>
    </div>
  );
};

function BackgroundImage() {
  const images = ["/forest6.jpg", "/forest7.jpg", "/forest4.jpg"]; // Add more images as needed
  const imageRefs = useRef([]); // Store refs for each image

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1 });

    images.forEach((_, i) => {
      let nextIndex = (i + 1) % images.length; // Get the next image index

      tl.to(imageRefs.current[i], {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });
      tl.to(
        imageRefs.current[nextIndex],
        { duration: 1, opacity: 1, ease: "power1.inOut" },
        "<"
      );
      tl.to({}, { duration: 4 }); // Delay before next transition
    });
  });
  return (
    <div>
      <div className="relative h-screen w-full text-center">
        <div className="-z-10">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              fill
              objectFit="cover"
              alt={`Background ${index + 1}`}
              className="absolute top-0 left-0 opacity-0"
              ref={(el) => (imageRefs.current[index] = el)} // Store ref
              style={{ zIndex: images.length - index }} // Ensure layering
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <h1 className="text-white text-6xl font-normal z-10">
            <span className={`${OutFit.className}`}>
              YR Pesticides and fertilizers
            </span>
            <br />
            <span className={`${OutFit.className} text-white text-2xl z-10`}>
              All You Need
            </span>
          </h1>
        </div>
      </div>
      <div className="p-2">
        <BentoImages />
      </div>
      <div className="h-screen w-full bg-white"></div>
    </div>
  );
}

export default BackgroundImage;
