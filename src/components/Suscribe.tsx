import React from "react";
import Image from "next/image";
import Button from "./Button";

const Subscribe: React.FC = () => {
  const handleClick = () => {
    // Change the URL on button click
    const url = "https://www.google.com"; // Set your desired URL here
    window.location.href = url;
  };

  return (
    <div className="bg-slate-500 lg:mt-[5%] p-10 h-[281px] relative flex items-center justify-center">
      <Image
        className="hidden lg:block lg:w-[300px] w-[100px] lg:h-[274px] h-[150px] relative transform translate-y-[-1%]"
        src="/L.png"
        alt="Image 1"
        width={200}
        height={200}
        priority
      />

      <div className="container text-white lg:w-[40%] h-full flex justify-center items-center flex-col p-8">
        <h1 className="text-4xl font-semibold uppercase text-center justify-center lg:text-left">
          Find out How We Work!
        </h1>
        <p className="text-xl font-semibold mt-6 leading-relaxed text-justify">
          Access our "How we Work guide + Subscribe"
        </p>
        <form className="mt-8 grid grid-cols-3 gap-4">
          {/* Input fields go here */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-white"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="last-name"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </form>
        <div className="w-[40%] h-[20%] text-xl flex items-center text-center justify-center">
          <Button
            onClick={handleClick}
            label="Subscribe"
            url="https://www.google.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
