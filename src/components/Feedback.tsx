import React from "react";

export default function Feedback() {
  return (
    <div className="w-full bg-black h-[643px] lg:mt-20 mb-20 relative m-20 flex items-center justify-center  ">
      <div className="lg:w-[270px] lg:h-[320px] left-0 top-[140px] absolute">
        <div className="w-[270px] h-[320px] left-0 top-0 absolute bg-zinc-300 rounded-tl-[10px] rounded-bl-[10px]"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute rounded-tl-[10px]"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[280px] top-[20px] absolute">
        <div className="lg:w-[270px] lg:h-[320px] left-0 top-[20px] absolute bg-zinc-300 rounded-tl-[10px]"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute rounded-tl-[10px]"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[280px] top-[370px] absolute">
        <div className="lg:w-[270px] lg:h-[320px] left-0 top-0 absolute bg-zinc-300 rounded-bl-[10px]"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[560px] top-[140px] absolute">
        <div className="w-[270px] h-[320px] left-0 top-0 absolute bg-zinc-300"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[840px] top-[20px] absolute">
        <div className="w-[270px] h-[320px] left-0 top-[20px] absolute bg-zinc-300 rounded-tr-[10px]"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute rounded-tr-[10px]"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[840px] top-[370px] absolute">
        <div className="w-[270px] h-[320px] left-0 top-0 absolute bg-zinc-300 rounded-br-[10px]"></div>
        <img
          className="lg:w-[270px] lg:h-[160px] left-0 top-0 absolute"
          src="https://via.placeholder.com/270x160"
        />
      </div>
      <div className="lg:w-[270px] lg:h-[320px] left-[1120px] top-[140px] absolute">
        <div className="lg:w-[270px] lg:h-[320px] left-0 top-0 absolute bg-zinc-300 rounded-tr-[10px] rounded-br-[10px]"></div>
        <img
          className="w-[270px] h-[160px] left-0 top-0 absolute rounded-tr-[10px]"
          src="https://via.placeholder.com/270x160"
        />
      </div>
    </div>
  );
}
