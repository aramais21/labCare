import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

// Redux
import store from './redux/store'; 

// Pages 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Products from './pages/Products';
import Product from './pages/Product';
import Projects from './pages/Projects';
import Project from './pages/Project';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Css
import './App.css';

function App() {
  return (
    <Provider store = {store} >
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/about'>
          <AboutUs></AboutUs>
        </Route>
        <Route path = '/services'>
          <Services/>
        </Route>
        <Route path = '/products'>
          <Products/>
        </Route>
        <Route path = '/product/:id'>
          <Product/>
        </Route>
        <Route path = '/projects'>
          <Projects/>
        </Route>
        <Route path = '/project/:id'>
          <Project/>
        </Route>
      </Switch>

      <Footer/>      
    </Router>
    </Provider>
  );
}

export default App;
