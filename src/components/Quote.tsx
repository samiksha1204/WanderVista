import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Photogal from "./Photogal";

const Quote = () => {
  const scrollToPhotogal = () => {
    scroll.scrollTo(Photogal); // Assuming Photogal is the element ID
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
          {/* Link to scroll to the "Photogal" section */}
          <ScrollLink
            to="Photogal"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value to your layout
            duration={500}
            className="text-6xl cursor-pointer"
            id="link"
          >
            <div className="flex flex-col items-center justify-center">
              <h3 className="mb-2">Explore More</h3>
              <FaArrowAltCircleDown />
            </div>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Quote;
