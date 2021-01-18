import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

// Redux
import store from './redux/store/index'; 

// Pages 
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Projects from './Pages/Projects';
import Project from './Pages/Project';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Css
import './Css/App.css';

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
