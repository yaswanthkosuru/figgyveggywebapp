import { OutFit } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Outfit } from "next/font/google";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

function ProjectCard({ title, description, imageUrl, tags }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden bg-[#CEB5A2] rounded-2xl p-8 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h2
            className={` ${OutFit.className} text-white text-4xl font-bold tracking-wide`}
          >
            {title}
          </h2>
          <p
            className={`text-white text-lg leading-relaxed ${OutFit.className}`}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white text-white text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full">
          <div className="relative transform ">
            <div className="aspect-[16/10] rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  useGSAP(() => {
    const cardsWrappers = gsap.utils.toArray(".card-wrapper");
    const cards = gsap.utils.toArray(".card");

    cardsWrappers.forEach((wrapper, i) => {
      const card = cards[i];
      let scale = 1,
        rotation = 0;
      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotation = -10;
      }
      gsap.to(card as Element, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper as Element,
          start: "top " + (60 + 10 * i),
          end: "bottom 550",
          endTrigger: ".wrapper",
          scrub: true,
          pin: wrapper as Element,
          pinSpacing: false,
          //   markers: {
          //     indent: 150 * i,
          //   },
          id: `${i + 1}`,
        },
      });
    });
  }, {});
  return (
    <div className="wrapper main  p-6 flex flex-col gap-3 items-center">
      <div className="card-wrapper">
        <div className="card">
          <ProjectCard
            title="Click a Photo of Your Crop"
            description="Simply take a photo of your affected crop and upload it to our platform. Our advanced system will analyze the image, and our expert agents will guide you on the best pesticide solution for your farm."
            imageUrl="/clickingphone.jpeg"
            tags={["Detect", "Diagnose", "protect"]}
          />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <ProjectCard
            title="Expert Advice, Just a Call Away!"
            description="Once you upload the photo, our experienced agriculture specialists will call you to assess the issue. They will provide personalized recommendations and suggest the best pesticide to protect your crops."
            imageUrl="/callingphone.jpeg"
            tags={["Analyse", "Advice", "Assist"]}
          />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <ProjectCard
            title="Precision Spraying for Maximum Protection!"
            description="Our trained field agents can visit your farm to spray the recommended pesticides or assist you in doing it yourself. Get professional help to ensure your crops are protected effectively and safely."
            imageUrl="/pouring.jpeg"
            tags={["Apply", "Protect", "Thrive"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
