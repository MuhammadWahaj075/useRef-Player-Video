import React, { useRef, useState } from "react";
import SeaVideo from "../Video/video.mp4";

import "./style.css";

const UseRefPlayer = () => {
  const videoRef = useRef();
  const [playOrPause, setplayOrPause] = useState(false);

  const handlePlayAndPause = () => {
    setplayOrPause(!playOrPause);
    if (playOrPause === true) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="main">
      <div className="btn-section">
        <button className="button play-btn" onClick={handlePlay}>
          <span>Play</span>
        </button>
        <button className="button play-pause-btn" onClick={handlePlayAndPause}>
          <span>{playOrPause === true ? "Pause" : "Play"}</span>
        </button>
        <button className="button pause-btn" onClick={handlePause}>
          <span>Pause</span>
        </button>
      </div>
      <div className="video-section">
        <video width="750" height="500" ref={videoRef} controls>
          <source src={SeaVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default UseRefPlayer;
