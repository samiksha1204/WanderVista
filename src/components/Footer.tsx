import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [arrayLength, setArrayLength] = useState(4);

  useEffect(() => {
    const updateArrayLength = () => {
      setArrayLength(window.innerWidth < 768 ? 1 : 4);
    };

    // Set initial array length
    updateArrayLength();

    // Update array length on window resize
    window.addEventListener("resize", updateArrayLength);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateArrayLength);
    };
  }, []);

  return (
    <footer className="flex flex-col mt-20 items-center bg-blue-200 text-center text-white dark:text-neutral-200">
      <div className="container p-6">
        <div
          className={`grid gap-4 md:grid-cols-${arrayLength} lg:grid-cols-6`}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`${index >= arrayLength ? "hidden lg:block" : ""}`}
            >
              <Image
                src={`https://tecdn.b-cdn.net/img/new/fluid/city/${
                  111 + index
                }.webp`}
                alt={`City ${111 + index}`}
                className="w-full rounded-md shadow-lg"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full text-2xl flex flex-row space-x-10 justify-center items-center bg-neutral-300 p-4 text-center text-neutral-700">
        © 2024 Copyright:
        <Link href="https://tw-elements.com/" legacyBehavior>
          <h1 className="dark:text-neutral-400">WanderVista</h1>
        </Link>
        <Link href="https://github.com/samiksha1204" legacyBehavior>
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samikshasharma-dev/"
          legacyBehavior
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
