import React from 'react';
import Home from '../homepage/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Bollywood from '../categories/bollywood';
import Hollywood from '../categories/Hollywood';
// import Tamil from '../categories/tamil'
import Player from '../components/player'







const Main = () => {
    return ( 
       
     
         
         <div clssName="App">
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/bollywood" component={Bollywood}/>
            <Route exact path="/hollywood" component={Hollywood}/>
            <Route exact path="/player" component={Player}/>

         
        </Switch>
        </BrowserRouter>
         

        
          

        </div>
     
        
       
     );
}
 
export default Main;