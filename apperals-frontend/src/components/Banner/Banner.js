import React, { useRef, useState } from "react";
import "./Banner.css";
import BannerVideo from "../../assets/BannerVideo.mp4";

export const Banner = () => {
  const [isHalfPlayed, setHalfPlayed] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      const duration = video.duration;

      if (currentTime >= duration * 0.7 && !isHalfPlayed) {
        setHalfPlayed(true);
      }
    }
  };

  return (
    <div className="banner-container">
      <video
        ref={videoRef}
        className="banner-video"
        autoPlay
        muted
        loop
        disablePictureInPicture
        onTimeUpdate={handleTimeUpdate}
        controls={false}
        role="video"
      >
        <source src={BannerVideo} type="video/mp4" />
        Your Browser does not support video
      </video>
      {isHalfPlayed && <BannerOverlay />}
    </div>
  );
};

const BannerOverlay = () => {
  return (
    <div className="banner-overlay">
      <p className="elevate">Elevate your Style</p>
      <p className="sub-head">
        Discover your Fashion Identity with our curated Collections
      </p>
      <button className="overlay-button"> Shop Now </button>
    </div>
  );
};
