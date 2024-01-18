import React, { useState } from "react";
import IndianStatesCitiesList from "indian-states-cities-list";

type StateSelectionBoxProps = {
  onStateSelect: (selectedState: string) => void;
};

const StateSelectionBox: React.FC<StateSelectionBoxProps> = ({
  onStateSelect,
}) => {
  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    onStateSelect(stateName);
  };

  return (
    <div>
      <select onChange={handleStateSelect} value={selectedState}>
        <option value="" disabled>
          Select a state
        </option>
        {Object.keys(IndianStatesCitiesList.STATE_WISE_CITIES).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateSelectionBox;
