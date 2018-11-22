import React  from 'react';

const VideoListItem = ({video, videoOnSelect}) => {
  console.log(video);
   const thumbImage = video.snippet.thumbnails.default.url;
    return (<li onClick={() => {videoOnSelect(video)}} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object"  src={thumbImage}/>
        </div>
        <div className="media-left">
          <div className="media-heading"> {video.snippet.title}</div>
        </div>
      </div>
      </li>);

}

export default VideoListItem;