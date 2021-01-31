import React from 'react';
import Nav from "./nav"
import Slider from "./slider"
import Popular from "./popular"
import Recent from "./recent"
import AllMovies from './allmovies';











const Home = () => {
    return (  
<div>
        <Nav/>
        <Slider/>
         <Popular/>
        <Recent/>
        <AllMovies/>
  
</div>


    );
}
 
export default Home;