"use client";
import Image from "next/image";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { InterSans } from "@/app/fonts";
gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
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
            gsap.to(word as Element, {
              color:
                index <= highlightIndex
                  ? "rgba(0, 0, 0, 1)"
                  : "rgba(0, 0, 0, 0.4)",
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
      className={`${InterSans.className} tracking-wider  text-balance md:font-[400px] md:text-2xl word text-black/40`}
    >
      {word}{" "}
    </span>
  ));

  return (
    <div>
      <h1 className="text-black uppercase text-md md:text-4xl">About Us</h1>
      <div className="mt-4"></div>
      <div ref={aboutRef} className="">
        {words}
      </div>
    </div>
  );
};

const AboutSection = () => {
  useGSAP(() => {
    gsap.to("[data-speed]", {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: "center center",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }, {});
  return (
    <div className="bg-[#F8F1E3] text-black py-20 ">
      <div className="block md:hidden ">
        <div data-speed="1.5" className="max-w-xl mx-auto">
          <AboutText />
        </div>
        <div
          data-speed="1.1"
          className="flex justify-between w-full gap-4  mx-auto"
        >
          <div
            data-speed="1.1"
            className=" overflow-hidden relative p-4 w-full h-56 rounded-[45%] max-w-40"
          >
            <Image src="/farmer.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
          <div
            data-speed="1.1"
            className=" overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40"
          >
            <Image src="/garden.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
        <div className="">
          <div
            data-speed="1.5"
            className=" overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40 mx-auto"
          >
            <Image src="/sunset2.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
      </div>
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="flex justify-between w-[90%] gap-4  mx-auto">
          <div
            data-speed="1.2"
            className=" overflow-hidden relative p-4 w-full h-56 rounded-[45%] max-w-40"
          >
            <Image src="/farmer.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
          <div className="max-w-[42rem] mx-auto">
            <AboutText />
          </div>
          <div
            data-speed="1.2"
            className=" overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-40"
          >
            <Image src="/sunset2.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
        <div className="">
          <div
            data-speed=""
            className=" overflow-hidden relative p-4 w-full h-40 rounded-[40%] max-w-60 mx-auto"
          >
            <Image src="/garden.jpeg" fill objectFit="cover" alt="Farmer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
