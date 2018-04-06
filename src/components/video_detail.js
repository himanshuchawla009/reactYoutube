import React from 'react';
const VideoItemDetail = ({VideoSelected}) =>{
    if(!VideoSelected){
        return(
            <h1>loading...</h1>
        )
    }
    var videoId =  VideoSelected.id.videoId;
    var Url ="https://www.youtube.com/embed/" + videoId;
  return(  <div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item"
   src={Url} 
   ></iframe>
</div>
  )

}
export default VideoItemDetail;