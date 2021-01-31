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
import Tamil from '../categories/tamil'
import Player from '../components/player'
import Chinese from '../categories/chinese';
import Foreign from '../categories/foreign';
import French from '../categories/french';
import IndianBangla from '../categories/indianbangla';
import Japanese from '../categories/japanese';
import Korean from '../categories/korean';
import Malayalam from '../categories/malayalam';
import Animation from '../categories/animation';
import Italian from '../categories/italian';

const Main = () => {
    return ( 
        
    <div clssName="App">
        
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/bollywood" component={Bollywood}/>
            <Route exact path="/hollywood" component={Hollywood}/>
            <Route exact path="/tamil" component={Tamil}/>
            <Route exact path="/chinese" component={Chinese}/>
            <Route exact path="/korean" component={Korean}/>
            <Route exact path="/malayalam" component={Malayalam}/>
            <Route exact path="/indianbangla" component={IndianBangla}/>
            <Route exact path="/japanese" component={Japanese}/>
            <Route exact path="/French" component={French}/>
            <Route exact path="/foreign" component={Foreign}/>
            <Route exact path="/italian" component={Italian}/>
            <Route exact path="/animation" component={Animation}/>
            <Route exact path="/player" component={Player}/>
        </Switch>
        </BrowserRouter>
         

    </div>
     
     );
}
 
export default Main;