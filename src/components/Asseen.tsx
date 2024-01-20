import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Asseenin() {
  return (
    <div className="bg-slate-500 mt-[5%] space-y-10 h-[285px] relative flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-20 font-semibold uppercase mb-10 text-center lg:text-left">
        AS SEEN IN
      </h1>
      <div className="flex flex-col-3 text-white items-center space-x-10">
        <Link href="https://www.theknot.com/" legacyBehavior>
          <h1 className="font-Great text-4xl capitalize">Theknot</h1>
        </Link>
        <Link href="https://www.brides.com/" legacyBehavior>
          <h1 className="font-Great text-4xl capitalize">Brides</h1>
        </Link>
        <Link href="https://www.flytographer.com/" legacyBehavior>
          <h1 className="font-Great text-4xl capitalize">Flytographer</h1>
        </Link>
      </div>

      <Image
        priority
        src="/LOGO.png"
        alt="Logo Image"
        width={180}
        height={100}
        className="w-[30rem] rounded-xl top-10 bottom-0 h-[35rem] transform -translate-x-1/5 translate-y-10"
      />
    </div>
  );
}
