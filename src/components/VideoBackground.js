import React from "react";

import "./VideoBackground.css";
const VideoBackground = ({ src }) => {
  return (
    <div className="video">
      <video src={src} autoPlay loop muted></video>
    </div>
  );
};

export default VideoBackground;
