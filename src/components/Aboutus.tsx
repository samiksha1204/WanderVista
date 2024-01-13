import React from "react";
import Image from "next/image";
import Button from "./Button";

interface ButtonProps {
  onClick: () => void;
  label: string;
}
const Aboutus: React.FC = () => {
  const handleClick = () => {
    // Change the URL on button click
    const url = "/About"; // Set your desired URL here
    window.location.href = url;
  };

  return (
    <div className="flex flex-col mt-20 md:flex-row w-full mb-20 lg:mt-[5%] justify-center gap-10  items-center lg:items-stretch h-[100%]">
      <div className=" w-[395px] h-[390.39px] relative">
        <Image
          className="  w-[212.21px] h-[211.92px] left-[92px] top-0 absolute rounded-full "
          src="/abou1.jpg"
          alt="Image 3"
          width={500}
          height={500}
          priority
        />
        <Image
          className="w-[212.21px] h-[211.92px] left-[182.79px] top-[69.61px] absolute rounded-full"
          src="/abou2.jpg"
          alt="Image 3"
          width={500}
          height={500}
          priority
        />{" "}
        <Image
          className="w-[212.21px] h-[211.92px] left-[147.80px] top-[178.46px] absolute rounded-full"
          src="/abou3.jpg"
          alt="Image 3"
          width={500}
          height={500}
          priority
        />
        <Image
          className="w-[212.21px] h-[211.92px]  left-0 top-[67.46px] absolute rounded-full"
          src="/abou5.jpg"
          alt="Image 3"
          width={500}
          height={500}
          priority
        />
        <Image
          className="w-[212.21px] h-[211.92px]  left-[31.97px] top-[177.85px] absolute rounded-full"
          src="/abou4.jpg"
          alt="Image 3"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="container lg:w-[40%] h-full flex justify-center items-center  flex-col p-8 text-center">
        <h1 className="text-4xl uppercase lg:text-left">
          Redefining Travel Since 2015
        </h1>
        <p className="text-xl  mt-6 leading-relaxed text-justify">
          Founded in 2015, Wandervista is a trailblazer in experiential travel.
          We believe travel is about more than just destinations; it's about
          cultural immersion. With us, every journey becomes a tapestry of
          unique experiences, inviting you to fully immerse yourself in the
          essence of your chosen destination. Join us, and let's redefine travel
          together.
        </p>
        <h2 className="text-6xl mt-4 font-Great lg:text-left">
          Unveiling Wandervista
        </h2>
        <Button onClick={handleClick} url="/About" label="Learn More" />
      </div>
    </div>
  );
};

export default Aboutus;
