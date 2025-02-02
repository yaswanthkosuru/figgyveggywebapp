import Image from "next/image";

export default function LeftContentRightImage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto p-6">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h1 className="text-3xl font-bold text-gray-800">Beautiful Layout</h1>
        <p
          className="text-transparent"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          This text has a transparent fill with a black outline. This is a
          simple two-column layout with text on the left and an image on the
          right. It is responsive and adjusts to different screen sizes
          gracefully.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center p-6">
        <Image
          src="/bottle2.jpg"
          alt="Placeholder"
          width={400}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
