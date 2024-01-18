// Packages.tsx
import React from "react";
import { Navbar, StatePage } from "@/components"; // Update the path accordingly

import {
  TouristSpot as TouristSpotType,
  touristSpots,
} from "../pages/data/travel";

const Packages: React.FC = () => {
  // Split the tourist spots into chunks of 4 for each row
  const chunkedTouristSpots = (array: TouristSpotType[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Render rows with 4 columns each
  return (
    <main>
      <Navbar />
      <h1 className="Font-bold text-4xl text-center items-center justify-center mt-20 mb-20">
        Famous Spots
      </h1>
      <div>
        {chunkedTouristSpots(touristSpots, 4).map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {row.map((spot: TouristSpotType) => (
              <StatePage key={spot.id} touristSpots={[spot]} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Packages;
