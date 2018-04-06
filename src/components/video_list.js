import React from 'react';
import VideoItem from './video_list_item'
const VideoList = (props) =>{
  const videoItems =  props.Videos.map((video)=>{
        
       return  <VideoItem onVideoSelect={props.onVideoSelect} key = {video.etag} Video={video}/>


    })
    return (
        <ul className="list-group ">
        {videoItems}
        </ul>
    )


}
export default VideoList;