import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './HomePage/Home';
import About from './AboutPage/About';
import Cart from './CartPage/Cart';


function App(){
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/cart' component={ Cart } />
      </Switch>
    </React.Fragment>
  );
}

export default App;
