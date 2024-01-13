// Button.tsx

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, url }) => {
  const handleClick = () => {
    // Change the URL on button click
    window.location.href = url;
  };

  return (
    <button
      onClick={onClick || handleClick}
      className="text-white target:_blank items-center justify-center bg-gradient-to-r w-full h-full mt-5 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-3xl text-4xl px-5 py-2.5 text-center me-2 mb-2"
    >
      {label}
    </button>
  );
};

export default Button;
