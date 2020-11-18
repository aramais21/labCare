import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// importing pages 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Projects from './Pages/Projects';
import Project from './Pages/Project';

// importing components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
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

      <Footer></Footer>      
    </Router>
  );
}

export default App;
