import React from 'react';
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import VideoPlayer from 'react-video-js-player'


const Player = () => {
    const location = useLocation();

    const [movie, setmovie] = useState ([])

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state); // result: 'some_value'
       setmovie(location.state)
    }, [location]);

    

    

    return ( 
    <div>
<VideoPlayer
                    controls={true}
                    src={}
                    
                    width="720"
                    height="420"
                    
                />
    </div>
     );
}
 
export default Player;