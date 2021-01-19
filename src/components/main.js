import React from 'react';
import Popular from './popular'
import Recent from './recent'
import AllMovies from './allmovies'
import Navbar from './nav'
import MySlider from './slider'
import { Divider } from '@material-ui/core';




const Main = () => {
    return ( 
        <div>
            <Navbar/>
            <MySlider/>
            <Popular/>
            <Recent/>
           
            <AllMovies/>

          

            
            
        </div>
     );
}
 
export default Main;