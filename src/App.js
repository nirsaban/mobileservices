import React from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';
const Hats = () =>(
<div>
<h1>Hats</h1>
</div>
)

class App extends React.Component {
 
  render() {
    return (
      <div>
      <Switch>
      <Route exact path ='/' component = {HomePage} />
      <Route exact path ='/hats' component = {Hats} />
      
      </Switch>
      </div>
    );
  }
}

export default App;
