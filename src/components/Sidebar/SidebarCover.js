import { Icon } from "Icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";

const SidebarCover = () => {
  const current = useSelector((state) => state.player.current);
  const dispatch = useDispatch();

  return (
    <div className="pt-[100%] relative bg-black group">
      <img
        src={current.image}
        alt="album-img"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center -rotate-90 rounded-full absolute top-1 right-1"
      >
        <Icon size={16} name="arrowLeft" />
      </button>
    </div>
  );
};

export default SidebarCover;
