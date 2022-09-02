import React from "react";
import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="prevArrow" size={22} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="nextArrow" size={22} />
      </button>
    </nav>
  );
};

export default Navigation;
