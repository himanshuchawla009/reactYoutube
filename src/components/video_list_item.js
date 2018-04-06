import React from 'react';
const VideoListItem = ({Video,onVideoSelect}) =>{
    return (
 <li className="list-group-item" onClick = {()=>{
     onVideoSelect(Video)
     
 }}  >      
<div  className="video-list media">
        <div className="media-left">
            <img className="media-object" src={Video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
            <div className="media-heading">
            <p>{Video.snippet.title}</p>

            </div>

         </div>
            
             
</div>
</li>

       
    )

}
export default VideoListItem;