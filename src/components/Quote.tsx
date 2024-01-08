import React from "react";
import Link from "next/link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useRouter } from "next/router";

const Quote = () => {
  const router = useRouter();

  const handleNavigateToPhotogal = () => {
    router.push("/Photogal");
  };

  return (
    <div className="flex w-full lg:mt-[5%] justify-center gap-4 items-center lg:items-stretch h-[100%]">
      {/* Text Container */}
      <div className="container lg:w-[60%] h-full flex justify-center items-center lg:items-start flex-col p-8">
        <p className="text-3xl font-semibold mt-6 text-white leading-relaxed text-center">
          Unique as Your Wanderlust, Let's Embark on a Journey Together. Explore
          the World with Wandervista – Where Your Travel Story Begins.
        </p>

        <div className="flex mx-auto items-center justify-center mt-4 relative">
          {/* Link to navigate to Photogal component */}
          <div
            className="text-6xl cursor-pointer"
            id="link"
            onClick={handleNavigateToPhotogal}
          >
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2">Explore More</h3>
              <FaArrowAltCircleDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
