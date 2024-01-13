import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="part3" className="bg-servicebg lg:mt-[5%] p-8">
      <h1 className="p-6 text-4xl font-semibold text-center">OUR SERVICES</h1>
      <h2 className="text-6xl font-Great mt-6 leading-relaxed text-center">
        Your unique travel flair
      </h2>
      {/* 1st card*/}
      <div className="p-6 lg:p-10 grid gap-8 lg:gap-20 items-center justify-center text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Solo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-black text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Discover yourself in the embrace of solitude. Wandervista beckons,
              where solo adventures redefine freedom and unveil the
              extraordinary within
            </p>
            <Link href="/Service">
              <h1 className="text-black text-4xl mt-10 font-bold">
                Wander Solo
              </h1>
            </Link>
          </div>
        </div>
        {/* 2nd card*/}
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Family.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-80
            "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-black text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Explore the magic of togetherness with Wandervista, where every
              group escape transforms joy, revealing the extraordinary in shared
              moments and thrilling adventures.
            </p>
            <Link href="/Service">
              <h1 className="text-black text-4xl mt-10 font-bold">
                Together Trails
              </h1>
            </Link>
          </div>
        </div>
        {/* 3rd card*/}
        <div className="relative border-y-8 border-cyan-400">
          <video
            src="Couple.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-black text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Embark on a romantic journey with Wandervista, where every
              couple's retreat redefines love, unveiling the extraordinary in
              shared moments and intimate adventures.
            </p>
            <Link href="/Service">
              <h1 className="text-black text-4xl mt-10 font-bold">
                Romantic Escapes
              </h1>
            </Link>
          </div>
        </div>
        {/* 4th card*/}
        <div className="relative border-y-8 border-cyan-400 hidden lg:block">
          <video
            src="Wedding.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-80
             bg-black"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-black text-2xl mb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              Celebrate love in style with Wandervista, where destination
              weddings and events redefine enchantment, unveiling the
              extraordinary in every cherished moment and magical celebration.
            </p>
            <Link href="/Service">
              <h1 className="text-black text-4xl mt-10 font-bold">
                Destination Celebrations
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
