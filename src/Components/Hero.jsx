import React from "react";

function Hero() {
  return (
    <div>
      <video
        src="https://videos.pexels.com/video-files/19935237/19935237-uhd_2560_1440_30fps.mp4"
        className='w-full h-[90vh] object-cover' 
        autoPlay
        loop
        muted
        infinite
        playsInline
      ></video>
    
    </div>
   
  );
}

export default Hero;
