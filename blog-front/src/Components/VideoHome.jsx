import React from 'react';

const Video = () => {
  return (

    <div className="video-container">

      <video className="video" autoPlay={true} loop muted>
        <source src="https://res.cloudinary.com/dfbmzsyx7/video/upload/v1563122303/There_app/coverr-waves-and-sand-1561484040281_xtzyrz.mp4" type="video/mp4" />
      </video>
      <div className="video-overflow"></div>
    </div>
  );
}

export default Video;