import React from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import { OutFit } from "@/app/fonts";

function App() {
  return (
    <div className="h-96 bg-[#1C1C1C] text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold tracking-wider">YR Products</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className={`text-5xl font-light mb-4 ${OutFit.className}`}>
            We hope to empower users and simplify
          </h2>
          <p
            className={`text-5xl font-light text-gray-400 ${OutFit.className}`}
          >
            their everyday lives.
          </p>
        </div>

        {/* Contact Information */}
        <div
          className={`mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 ${OutFit.className}`}
        >
          <div>
            <h3 className="text-gray-400 text-sm mb-3">LOCATION</h3>
            <p className="text-lg">Kosuru Vari Palem</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-3">INQUIRY</h3>
            <p className="text-lg">yaswanthkosuru999@gmail.com</p>
            <p className="text-lg">+91 9866346516</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex gap-6">
          <a href="#" className="p-3 rounded-full border transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full border transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full border transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
