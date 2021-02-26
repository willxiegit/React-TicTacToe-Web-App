import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './Navbar';
import Home from '../home/Home';
import About from '../about/About'
import Play from '../play/Play';

export default function App() {
  return(
    <div className='app'>
      <NavBar />
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/play'>
            <Play />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}