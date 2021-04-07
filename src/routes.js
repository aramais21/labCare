import React from 'react'
import { Redirect, Route, Switch } from "react-router";
import { selectIsLoggedIn } from './redux/slices/auth';
import {useSelector} from 'react-redux';


// Pages 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import Products from './pages/Products';
import Product from './pages/Product';
import Contacts from './pages/Contacts';
import Login from './pages/LogIn';
import Main from './pages/Admin/Main';
import Add from './pages/Admin/Add';
import Delete from './pages/Admin/Delete';
import Update from './pages/Admin/Update';

const Routing = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    switch(isLoggedIn) {
        case false:
            return (
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
                  <Route path = '/login' >
                    <Login></Login>
                  </Route>
                  <Redirect to = '/' />
                </Switch>
            );
        case true:
            return (
                <Switch>
                  <Route exact path = '/' >
                    <Main></Main>
                  </Route>
                  <Route path = '/add' >
                    <Add></Add>
                  </Route>
                  <Route path = '/delete' >
                    <Delete></Delete>
                  </Route>
                  <Route path = '/update' >
                    <Update></Update>
                  </Route>
                  <Redirect to = '/' />
                </Switch>
            );
        default:
            return;
    }
}

export default Routing;