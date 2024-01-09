import React from "react";
import NextLink from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Button from "./Button";
import Image from "next/image";
interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Photogal: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your click event logic here
  };
  return (
    <section id="Photogal">
      <div className="flex w-full mb-20 lg:mt-[5%] justify-center gap-4 items-center lg:items-stretch h-[100%]">
        {/* Text Container */}
        <div className="container lg:w-[40%] h-full flex justify-center items-center  flex-col p-8">
          <h1 className="text-4xl font-semibold  uppercase text-center justify-center lg:text-left">
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
          <Button onClick={handleClick} label="Learn More" />
        </div>

        {/* Image Container */}
        <div className="w-[353.38px] hidden lg:block h-[345.47px] lg:right-[1%]  relative">
          {/* Image 1 */}
          <Image
            className="hidden lg:block w-[200.90px] h-[240.19px] left-[210.47px] top-[131.28px] absolute"
            src="/one.jpg"
            alt="Image 1"
            width={500}
            height={500}
            priority
          />
          {/* Image 2 */}
          <Image
            className="hidden lg:block w-[200.90px] h-[250.19px] left-[100.58px] top-[59.59px] absolute"
            src="/two.jpg"
            alt="Image 2"
            width={500}
            height={500}
            priority
          />
          {/* Image 3 */}
          <Image
            className="hidden border-4 border-white lg:block w-[200.90px] h-[250.19px] left-0 top-0 absolute"
            src="/three.jpg"
            alt="Image 3"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Photogal;
