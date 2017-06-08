//This component doesn't render anything by itself and doesn't maintain any state so we just need plain functional component.
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //argument props contains videos
    //in functional component props are availble as argument.
    //{props.videos.length} //props.videos is an array to can be loop through.
    //using map to loop the array of videos.
    const videoItems = props.videos.map((video) => {
        //etag is unique value for each video item which we get from api response.
        //video is a property which is availble in video_list_item. we have to use this name in video_list_item.js.we are getting the name video from index.js of videodetail component.
        return(
        <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} video = {video} /> 
        
        ) 
    });
    return(
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
    );
};

export default VideoList;