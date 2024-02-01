import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrese_minutes,
  decrese_second,
  long_break,
  reset,
  shork_break,
  start,
  work,
} from "../../store/actions";
import { useEffect } from "react";
import sound from "../../theend.mp3";
import useSound from "use-sound";

export default function Pomodora() {
  // hooks
  const { minutes, second, isPlaying } = useSelector((state) => state);
  const dispatch = useDispatch();

  // for format
  const formatNum = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formMin = formatNum(minutes);
  const formSec = formatNum(second);

  // for decrease Seconds and Minutes
  useEffect(() => {
    let interval = setInterval(() => {
      if (isPlaying) {
        dispatch(decrese_second());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, dispatch]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isPlaying) {
        dispatch(decrese_minutes());
      }
    }, 59998);

    return () => clearInterval(interval);
  }, [isPlaying, dispatch]);

  // for sound effects
  const [play] = useSound(sound);

  const PlaySound = () => {
    if (formMin <= 0 && formSec <= 0) play();
  };

  return (
    <div className="bg-sky-600 py-5 rounded-lg flex flex-col text-center items-center gap-5">
      <div className="flex gap-2">
        <button
          className="rounded-md w-28 transition-all focus:bg-blue-700 hover:bg-blue-700"
          onClick={() => dispatch(work())}
        >
          Work
        </button>
        <button
          className="rounded-md w-28 transition-all focus:bg-blue-700 hover:bg-blue-700"
          onClick={() => dispatch(shork_break())}
        >
          Shork Break
        </button>
        <button
          className="rounded-md w-28 transition-all focus:bg-blue-700 hover:bg-blue-700"
          onClick={() => dispatch(long_break())}
        >
          Long Break
        </button>
      </div>
      <span className="text-6xl">
        {formMin}:{formSec}
        {PlaySound()}
      </span>
      <div>
        <button
          style={
            isPlaying
              ? { backgroundColor: "red" }
              : { backgroundColor: "#1D4ED8" }
          }
          className="rounded-md w-28 transition-all hover:bg-blue-700"
          onClick={() => dispatch(start())}
        >
          {isPlaying ? "STOP" : "START"}
        </button>
        <button
          className="rounded-md w-28 transition-all focus:bg-blue-700 hover:bg-blue-700"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
