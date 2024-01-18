import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Feedback() {
  return (
    <div className=" bg-servicebg p-8 text-4xl font-semibold text-center mb-8">
      <h1>Reading Corner</h1>

      <div className="p-4 lg:px-10 h-[30%] mt-10 xl:px-40 flex capitalize flex-col-3 items-center space-x-20 justify-center text-center gap-8">
        {/* Image */}
        <div className="relative flex-shrink-0 w-80 h-80">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/travel-adventure-with-baggage_23-2149153255.jpg?size=626&ext=jpg&ga=GA1.1.1506511834.1697364203&semt=sph"
            alt="Image 1"
            width={500}
            height={500}
            priority
          />
          <Link
            href="https://www.st-christophers.co.uk/travel-blog/what-to-pack-in-your-travel-backpack/"
            legacyBehavior
          >
            <h1 className="text-gray-700 text-2xl">Things to pack</h1>
          </Link>
        </div>
        <div className="relative flex-shrink-0 w-80 h-80">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/majestic-pyramid-shape-awe-inspiring-ancient-civilization-monument-generated-by-ai_188544-21352.jpg?size=626&ext=jpg&ga=GA1.1.1506511834.1697364203&semt=ais"
            alt="Image 1"
            width={500}
            height={500}
            priority
          />
          <Link
            href="https://www.nationalgeographic.com/history/article/valley-of-the-kings"
            legacyBehavior
          >
            <h1 className="text-gray-700 text-2xl">Valley Of The Kings</h1>
          </Link>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0 w-80 h-80">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/young-couple-blanket-sitting-sea-shore_23-2148019902.jpg?w=900&t=st=1705597065~exp=1705597665~hmac=270fd872fb684093d8e5a4d3f0d0f26521bd3bf93b0d523392b154f839c2e044"
            alt="Image 1"
            width={500}
            height={500}
            priority
          />
          <Link
            href="https://honeymoons.com/best-honeymoon-destinations/"
            legacyBehavior
          >
            <h1 className="text-gray-700 text-2xl">Honeymoon Destinations</h1>
          </Link>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0 w-80 h-80">
          <Image
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.1506511834.1697364203&semt=sph"
            alt="Image 1"
            width={500}
            height={500}
            priority
          />
          <Link
            href="https://www.ramseysolutions.com/saving/5-steps-to-planning-memorable-vacation"
            legacyBehavior
          >
            <h1 className="text-gray-700 text-2xl">
              How to plan a budget trip
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
