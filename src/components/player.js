import { Typography } from '@material-ui/core';
import React from 'react';
import { useLocation } from "react-router-dom";
import VideoPlayer from 'react-video-js-player'


const Player = () => {
    const location = useLocation();

    return ( 
        <div>
            <VideoPlayer 
                controls={true}
                src={location.state.video_url}
                poster={location.state.image_url}
                width="1365.5"
                height="400"
            />

            <Typography>{location.state.title}</Typography>
        </div>
     );
}
 
export default Player;