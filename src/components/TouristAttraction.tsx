// StatePage.tsx

import React, { useState } from "react";
import Image from "next/image";
import { TouristSpot as TouristSpotType } from "../pages/data/travel";

type StatePageProps = {
  touristSpots: TouristSpotType[];
};

const StatePage: React.FC<StatePageProps> = ({ touristSpots }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedSpot, setExpandedSpot] = useState<string | null>(null);

  const toggleExpand = (spotId: string) => {
    setExpandedSpot((prevExpanded) =>
      prevExpanded === spotId ? null : spotId
    );
  };

  const isSpotExpanded = (spotId: string) => expandedSpot === spotId;

  const filteredTouristSpots = touristSpots.filter((spot) =>
    spot.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 lg:px-20 xl:px-40  flex flex-row gap-8">
      {/* Tourist Spots */}
      {filteredTouristSpots.map((spot: TouristSpotType) => (
        <div key={spot.id} className="flex flex-col w-80">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={spot.images}
              alt={`Image of ${spot.name}`}
              className="object-cover"
              layout="fill"
            />
          </div>

          {/* Text Container */}
          <div className="bg-white p-4">
            <h1 className="font-strong text-2xl">{spot.name}</h1>
            <p
              className={`text-gray-700 ${
                isSpotExpanded(spot.id) ? "h-auto" : "h-20 overflow-hidden"
              }`}
            >
              {spot.info}
            </p>
            {spot.info.length > 200 && (
              <button
                className="text-blue-500 mt-2"
                onClick={() => toggleExpand(spot.id)}
              >
                {isSpotExpanded(spot.id) ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatePage;
