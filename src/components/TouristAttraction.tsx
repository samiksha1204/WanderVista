import React from "react";
import Image from "next/image";
import {
  State as StateType,
  Product as ProductType,
} from "../pages/data/travel";

type StatePageProps = {
  state: StateType;
};

const StatePage: React.FC<StatePageProps> = ({ state }) => {
  if (!state) {
    return <div>No state found</div>;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {state.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={state.img[0]}
            alt={state.name}
            className="object-contain hover:rotate-[360deg] transition-all duration-500"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {state.name}
        </h1>
        <p>{state.about}</p>
        <p>
          <strong>ID:</strong> {state.id}
        </p>
        <p>
          <strong>Capital:</strong> {state.capital}
        </p>
        <p>
          <strong>Climate:</strong> {state.climate}
        </p>
        <p>
          <strong>History:</strong> {state.history}
        </p>
        <p>
          <strong>Time:</strong> {state.time}
        </p>
        <p>
          <strong>Food:</strong> {state.food}
        </p>

        {/* Render your products and tourist spots here */}
        <h2 className="text-xl font-semibold mt-4">Products:</h2>
        {state.products.map((product: ProductType, index: number) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}

        <h2 className="text-xl font-semibold mt-4">Tourist Spots:</h2>
        {state.tourist.map((spot, index) => (
          <div key={index}>
            <h3>{spot.name}</h3>
            <p>{spot.info}</p>
            <p>
              <strong>Location:</strong> {spot.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatePage;
