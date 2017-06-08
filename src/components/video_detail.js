import React from 'react';

const VideoDetail = ({video}) => {
if(!video) { //handling null props. in initial state we are setting videos to null so.This kind of handling has to be done on very high level. in our case in App component.
    return<div>Loading...</div>;
}
 const videoId = video.id.videoId;
 //const url = 'https://www.youtube.com/embed/' + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
  return(
  <div className="video-details col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
  <div className="details">
    <div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
  </div>
  </div>
  );
};

export default VideoDetail;