import { InterSans, OutFit } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LeftContentRightImage() {
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bottle2",
        toggleActions: "play none none reverse",
      },
    });
    t1.fromTo(
      ".bottle2",
      {
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "power1.inOut",
      }
    );

    t1.fromTo(
      ".showcase1-header",
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      },
      "-=0.8"
    );
  }, {});
  return (
    <div className="flex  max-w-6xl flex-col md:flex-row items-center justify-center  mx-auto">
      {/* Left Content */}
      <div className="md:w-1/2 z-10 text-orange-700 text-center md:text-left">
        <p
          className={`text-4xl text-center showcase1-header font-bold uppercase ${InterSans.className}`}
        >
          Healthy Crops, Prosperous Harvests!
        </p>
      </div>

      {/* Right Image */}
      <div className="relative overflow-hidden md:w-1/2 flex justify-center p-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/pharma.jpeg"
            alt="Placeholder"
            width={400}
            height={200}
            className="rounded-lg shadow-lg bottle2"
          />
        </div>
      </div>
    </div>
  );
}
