/* eslint-disable react-hooks/exhaustive-deps */
import CustomRange from "components/CustomRange";
import FullScreenPlayer from "components/FullScreenPlayer";
import { Icon } from "Icons";
import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { setControls, setPlaying, setSidebar } from "stores/player";
import { secondsToTime } from "utils";

const Player = () => {
  const { current, sidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const fsRef = useRef();

  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  const [audio, state, controls] = useAudio({
    src: current?.src,
    autoPlay: true,
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "volumeMutedIcon";
    }
    if (state.volume > 0 && state.volume < 0.33) {
      return "volumeLowIcon";
    }
    if (state.volume >= 0.33 && state.volume < 0.66) {
      return "volumeNormalIcon";
    }
    if (state.volume === 0 || state.muted) {
      return "volumeMuted";
    }
    return "volumeFullIcon";
  }, [state.volume, state.muted]);

  useEffect(() => {
    controls.play();
  }, []);
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                  <img src={current.image} alt="" />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center rotate-90 rounded-full absolute top-1 right-1"
                  >
                    <Icon size={16} name="arrowLeft" />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white">
              <Icon size={16} name="heart" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white">
              <Icon size={16} name="pictureInPictureIcon" />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col px-4 items-center max-w-[45.125rem] w-[40%] pt-2">
        <div className="flex items-center mt-1.5 gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffleIcon" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrevIcon" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center text-black bg-white rounded-full hover:scale-[1.06] "
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon size={16} name={state.playing ? "pauseIcon" : "playIcon"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNextIcon" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeatIcon" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
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
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end ">
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="lyricsIcon" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="queueIcon" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="deviceIcon" />
        </button>
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
          <Icon size={16} name="fullScreenIcon" />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullscreen && (
          <FullScreenPlayer
            toggle={toggle}
            state={state}
            controls={controls}
            volumeIcon={volumeIcon}
          />
        )}
      </div>
    </div>
  );
};

export default Player;
