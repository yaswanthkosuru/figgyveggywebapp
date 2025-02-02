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
        duration: 2,
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
      }
    );
  }, {});
  return (
    <div className="flex bg-[#F8F1E3] flex-col md:flex-row items-center justify-center max-w-7xl mx-auto p-6">
      {/* Left Content */}
      <div className="md:w-1/2 absolute z-10 text-orange-800 text-center md:text-left p-6">
        <p
          className="text-transparent showcase1-header text-7xl font-bold uppercase"
          style={{
            WebkitTextStroke: "2px orange",
          }}
        >
          Healthy Crops, Prosperous Harvests!
        </p>
      </div>

      {/* Right Image */}
      <div className="relative overflow-hidden md:w-1/2 flex justify-center p-6">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/bottle2.jpg"
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
