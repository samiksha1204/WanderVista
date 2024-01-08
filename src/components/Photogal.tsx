import React from "react";
import NextLink from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Photogal = () => {
  return (
    <section id="Photogal">
      <div className="flex w-full lg:mt-[5%] justify-center gap-4 items-center lg:items-stretch h-[100%]">
        {/* Text Container */}
        <div className="container lg:w-[40%] h-full flex justify-center items-center  flex-col p-8">
          <h1 className="text-4xl font-semibold uppercase text-center justify-center lg:text-left">
            Welcome to Wandervista
          </h1>
          <p className="text-xl font-semibold mt-6 leading-relaxed text-justify">
            Discover a new level of travel with Wandervista, where your journey
            is more than a reservation number—it's a personalized adventure
            tailored to your unique travel style. From the moment you fill out
            our thorough inquiry form to your safe return home, we're dedicated
            to ensuring every detail exceeds your expectations. Experience the
            world, expand your horizons, and embark on a journey where
            exploration knows no bounds. At Wandervista, every trip is a story,
            and every traveler is a cherished chapter in our tale of wanderlust.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-[353.38px] hidden lg:block h-[345.47px] lg:right-[1%]  relative">
          {/* Image 1 */}
          <img
            className="hidden lg:block w-[200.90px] h-[240.19px] left-[210.47px] top-[131.28px] absolute"
            src="one.jpg"
            alt="Image 1"
            loading="lazy"
          />
          {/* Image 2 */}
          <img
            className="hidden lg:block w-[200.90px] h-[250.19px] left-[100.58px] top-[59.59px] absolute"
            src="two.jpg"
            alt="Image 2"
            loading="lazy"
          />
          {/* Image 3 */}
          <img
            className="hidden border-4 border-white lg:block w-[200.90px] h-[250.19px] left-0 top-0 absolute"
            src="three.jpg"
            alt="Image 3"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Photogal;
