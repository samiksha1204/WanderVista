import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="part3" className="bg-blue-100 lg:mt-[5%] p-8">
      <h1 className="p-6 text-4xl font-semibold text-center">OUR SERVICES</h1>
      <h2 className="text-2xl font-semibold mt-6 leading-relaxed text-center">
        Your unique travel flair
      </h2>
      <div className="p-6 lg:p-10 grid gap-8 lg:gap-20 items-center justify-center text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Solo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Discover yourself in the embrace of solitude. Wandervista beckons,
              where solo adventures redefine freedom and unveil the
              extraordinary within
            </p>

            <h1 className="text-white text-4xl mt-10 font-bold">
              Solo Adventures
            </h1>
          </div>
        </div>
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Solo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Discover yourself in the embrace of solitude. Wandervista beckons,
              where solo adventures redefine freedom and unveil the
              extraordinary within
            </p>

            <h1 className="text-white text-4xl mt-10 font-bold">
              Solo Adventures
            </h1>
          </div>
        </div>
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Solo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Discover yourself in the embrace of solitude. Wandervista beckons,
              where solo adventures redefine freedom and unveil the
              extraordinary within
            </p>

            <h1 className="text-white text-4xl mt-10 font-bold">
              Solo Adventures
            </h1>
          </div>
        </div>
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Solo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Discover yourself in the embrace of solitude. Wandervista beckons,
              where solo adventures redefine freedom and unveil the
              extraordinary within
            </p>

            <h1 className="text-white text-4xl mt-10 font-bold">
              Solo Adventures
            </h1>
          </div>
        </div>

        {/* Additional video sections can be added here */}
      </div>
    </section>
  );
}
