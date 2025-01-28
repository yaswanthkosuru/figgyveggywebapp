"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import Image from "next/image";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();
const HeroSection = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({});
    t1.from(".box", {
      // yPercent: 100,
      duration: 1,
      opacity: 0,
      clipPath: "inset(100% 0% 0 0)",
      ease: "power1.Out",
    });
    t1.from(".overlay-text", {
      xPercent: 100,
      opacity: 0,
    });
  }, {});
  return (
    <div className="box relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <Image
          src="/bridge.jpg" // Ensure the image is placed in the public folder
          alt="Background"
          fill
          className=" bg-cover"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        {/* 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          {/* Add more <source> tags for other formats if necessary */}
        {/* Your browser does not support the video tag.
        </video>  */}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>

      {/* Text Overlay */}
      <div className=" relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="overlay-text text-4xl md:text-6xl font-bold uppercase tracking-widest">
          Welcome
        </h1>
        <p className="overlay-text qmt-4 text-lg md:text-2xl font-light">
          Your inspirational quote goes here.
        </p>
      </div>
    </div>
  );
};

const MainSection = () => {
  return <div className="w-full h-screen bg-slate-400">MainSection</div>;
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold uppercase">
          <Image src="/Vector.svg" width={60} height={60} alt="brand" />
          {/* <a href="/">Brand</a> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 pb-4">
          <a
            href="#home"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};
const SectionHero = () => {
  useGSAP(() => {
    const getRatio = (el: any) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);
    const t1 = gsap.timeline({});
    t1.to(".hero-section", {
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
        pinSpacing: false,
      },
    });
  }, {});
  return (
    <>
      <div>
        <div className="z-20 hero-section">
          <div className="hero-content">
            <HeroSection />
          </div>
        </div>
      </div>
    </>
  );
};
const Page = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className=" text-4xl">
      <div className=" fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <SectionHero />
      <div>
        <MainSection />
      </div>
    </div>
  );
};

export default Page;
