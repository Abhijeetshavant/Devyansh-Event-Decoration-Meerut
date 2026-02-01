import React from "react";
import backgroundImg from "../assets/backgroundimg1.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-4">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-white/20 text-white">
          TOP RATED IN NOIDA
        </span>

        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
          Transform Your Celebration with Meerut&apos;s Top Events Decorators
        </h1>

        <p className="text-gray-200 text-base md:text-lg mb-8">
          Affordable Packages Tailored to Your Celebration Needs—Starting at
          Just ₹2599!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Hero;
