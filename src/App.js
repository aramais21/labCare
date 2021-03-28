import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

// Redux
import store from './redux/store'; 

// Pages 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import Products from './pages/Products';
import Product from './pages/Product';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Css
import './App.css';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Provider store = {store} >
    <Router>
      {/* height of Navbar 5.625rem */}
      <Navbar></Navbar>

      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path = '/activities'>
          <Activities/>
        </Route>
        <Route path = '/products'>
          <Products/>
        </Route>
        <Route path = '/product/:id'>
          <Product/>
        </Route>
        <Route path = '/contacts' >
          <Contacts></Contacts>
        </Route>
      </Switch>

      <Footer/>      
    </Router>
    </Provider>
  );
}

export default App;
