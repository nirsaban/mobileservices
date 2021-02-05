import React from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.compomnent.jsx'
import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path ='/' component = {HomePage} />
      <Route exact path ='/shop' component = {ShopPage} />
      </Switch>
      
      </div>
    );
  }
}

export default App;
