import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

// Redux
import store from './redux/store'; 

// Routing
import Routing from './routes';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Css
import './App.css';


function App() {
  return (
    <Provider store = {store} >
    <Router>
      {/* height of Navbar 5.625rem */}
      <Navbar></Navbar>
      <Routing></Routing>
      <Footer/>      
    </Router>
    </Provider>
  );
}

export default App;
