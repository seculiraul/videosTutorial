import React from "react";


const VideoDetail = ({ video }) => {
    if(!video) { 
        return <div>Loading</div>;
    }
    const videoId = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="YouTube video player" scr={videoId} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;