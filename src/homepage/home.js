import React from 'react';

import Nav from "./nav"
import Slider from "./slider"
// import Popular from "./popular"
// import Recent from "./recent"
// import AllMovies from "./allmovies";
// import Bollywood from '../categories/bollywood';
// import Hollywood from '../categories/Hollywood';
// import Tamil from '../categories/tamil'
import Indian from '../categories/indianbangla';


const Home = () => {
    return (  
<div>
        <Nav/>
        <Slider/>
        {/* <Popular/>
        <Recent/>
        <AllMovies/> */}
        {/* <Bollywood/> */}
        {/* <Hollywood/> */}
        {/* <Tamil/> */}
        <Indian/>
        
</div>


    );
}
 
export default Home;