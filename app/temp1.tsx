import React from "react";
import { AdventureFont, InterSans, OutFit } from "./fonts";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
      </div>
      <div className="flex space-x-10">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">
          About
        </a>
        <a href="#" className="text-lg">
          Contact
        </a>
      </div>
    </div>
  );
};
const Background = () => {
  return (
    <div>
      <div className="hidden sm:block sm:absolute -right-3 -z-50">
        <div className="relative w-[250px] h-[500px]">
          <Image src="/left.svg" alt="background" className="" fill />
        </div>
      </div>
      <div className="hidden sm:block sm:absolute -left-3 top-20 -z-50">
        <div className="relative w-[250px] h-[500px] -z-50">
          <Image src="/right.svg" alt="background" className="" fill />
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <div className="sm:mx-[100px] sm:mt-[50px]">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <Background />
        <div className={`${OutFit.className}`}>
          <p className="text-[50px] sm:text-[70px] font-normal">
            Managing Your <span className="text-primary">Hostels</span> Has
            <br />
            Never Been Easier
          </p>
        </div>
        <div className="mt-6"></div>
        <div className={`${OutFit.className} ml-20`}>
          <span className="text-2xl font-light leading-6 tracking-wide">
            Simplified <span className="text-primary">Operations</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
