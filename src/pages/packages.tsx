// Packages.tsx

import React from "react";
import StatePage from "@/components/TouristAttraction"; // Update the path accordingly
import { states, State } from "./data/travel"; // Update the path accordingly

const Packages: React.FC = () => {
  return (
    <div>
      <h1>Explore Packages</h1>
      {states.map((state: State) => (
        <StatePage key={state.id} state={state} />
      ))}
    </div>
  );
};

export default Packages;
