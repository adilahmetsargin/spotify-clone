import { Icon } from "Icons";
import React from "react";
import { useSelector } from "react-redux";
import { secondsToTime } from "utils";
import CustomRange from "./CustomRange";

const FullScreenPlayer = ({ toggle, state, controls, volumeIcon }) => {
  const { current } = useSelector((state) => state.player);

  return (
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-50"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="absolute left-8 bottom-36 flex items-center gap-x-5">
        <img
          src={current.image}
          alt="bg-img"
          className="w-24 h-24 object-cover"
        />
        <div className="self-end">
          <h3 className="text-3xl font-bold">{current.title}</h3>
          <h3 className="text-sm font-medium opacity-50">
            {current.description}
          </h3>
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col px-8 items-center w-full absolute bottom-4"
      >
        <div className="w-full flex items-center gap-x-2">
          <div>{secondsToTime(state?.time)}</div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>

        <div className="flex items-center gap-x-5 ">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="shuffleIcon" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerPrevIcon" />
          </button>
          <button
            className="w-16 h-16 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06] "
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon size={24} name={state.playing ? "pauseIcon" : "playIcon"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerNextIcon" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="repeatIcon" />
          </button>
        </div>
        <div className="flex items-center gap-x-3 absolute right-6 bottom-3">
          <button
            className="w-8 h-8 flex items-center justify-center text-white"
            onClick={controls[state.muted ? "unmute" : "mute"]}
          >
            <Icon size={16} name={volumeIcon} />
          </button>
          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state?.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center text-white"
          >
            <Icon size={24} name="fullScreenIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
