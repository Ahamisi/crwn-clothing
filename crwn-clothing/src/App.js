import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import  './pages/homepage/homepage.styles.scss';
import ShopPage from '././pages/shop/shop.component'
const HatsPage = () =>{
  return (
    <div>
      <h1>Hatss Pages</h1>
    </div>
  )
}

function App() { 
  return (
    <div>
      <Switch>
        <Route path="/" exact="true" component={HomePage} />
        {/* <Route path="/shop/hats" exact="true" component={HatsPage} /> */}
        <Route path="/shop" exact="true" component={ShopPage} />

          {/* // <HomePage/> */}
      </Switch>
    </div>
  );
}

export default App;
