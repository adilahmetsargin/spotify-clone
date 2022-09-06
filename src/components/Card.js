import { Icon } from "Icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "stores/player";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  const borderStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  const isCurrentSong = current?.id === item?.id && playing;

  return (
    <NavLink
      key={item.id}
      to="/"
      className={"bg-footerBg p-4 rounded hover:bg-activeItem group"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          alt=""
          className={`absolute inset-0 object-cover w-full h-full ${borderStyle(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2  items-center justify-center ${
            !isCurrentSong ? "flex" : "hidden"
          } group-hover:flex group-focus:flex`}
        >
          <Icon name={isCurrentSong ? "pauseIcon" : "playIcon"} size={16} />
        </button>
      </div>
      <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
};

export default Card;
