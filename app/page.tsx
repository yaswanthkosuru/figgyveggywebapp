"use client";
import Image from "next/image";
import { InterSans, OutFit } from "./fonts";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AboutSection from "@/components/About";
import LeftContentRightImage from "@/components/showcase1";
import Showcase2 from "@/components/showcase2";
import Showcase3 from "@/components/showcase3";
import Footer from "@/components/Footer";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const images = [
    "/sunsetpaddy.jpeg",
    // "/forest6.jpg",
    // "/forest7.jpg",
    "/forest4.jpg",
  ]; // Add more images as needed
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]); // Store refs for each image

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
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroText",
        start: "center 40% ",
        end: "bottom +=40px",
        scrub: true,
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
    t2.to(".heroText", {
      duration: 1,
      yPercent: -10,
      opacity: 0,
      ease: "ease.inOut",
    });
  });
  return (
    <div className="bg-[#F8F1E3]">
      <div className="relative h-screen w-full text-center">
        <div className="imageList -z-10">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              fill
              objectFit="cover"
              alt={`Background ${index + 1}`}
              className="absolute top-0 left-0 opacity-0"
              ref={(el) => {
                imageRefs.current[index] = el;
              }} // Store ref
              style={{ zIndex: images.length - index }} // Ensure layering
            />
          ))}
        </div>
        <div className="">
          <div className="absolute z-10 heroText inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <h1 className="text-white  text-6xl font-normal z-50">
              <span className={` ${OutFit.className}`}>
                YR Pesticides and fertilizers
              </span>
              <br />
              <span className={`${OutFit.className} text-white text-2xl z-10`}>
                All You Need
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <AboutSection />
      </div>
      <div>
        <LeftContentRightImage />
      </div>
      <div className="">
        <Showcase3 />
      </div>
      <div className="">
        <Showcase2 />
      </div>

      <div className=" mt-96 md:mt-0 h-screen w-full bg-[#1C1C1C]">
        <Footer />
      </div>
      <div className="bg-[#1c1c1c] h-20"></div>
    </div>
  );
}

export default Home;
