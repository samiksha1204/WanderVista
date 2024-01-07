import React from "react";

export default function Photogal() {
  return (
    <div className="lg:flex lg:items-center lg:justify-center h-[100%]">
      <div className="w-[100px] h-[373.50px] relative">
        <div className="w-[353.38px] h-[345.47px] lg:right-[10%] top-[20%] relative">
          {/* Image 1 */}
          <img
            className="hidden  lg:block w-[242.90px] h-[214.19px] left-[210.47px] top-[131.28px] absolute"
            src="one.jpg"
            alt="Image 1"
          />
          {/* Image 2 */}
          <img
            className="hidden lg:block w-[242.90px] h-[214.19px] left-[100.58px] top-[59.59px] absolute"
            src="two.jpg"
            alt="Image 2"
          />
          {/* Image 3 */}
          <img
            className="hidden border-4 border-white lg:block w-[242.90px] h-[214.19px] left-0 top-0 absolute"
            src="three.jpg"
            alt="Image 3"
          />
        </div>
        <h1>hii</h1>
      </div>
    </div>
  );
}
