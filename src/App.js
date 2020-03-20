import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
      <BrowserRouter>
      <>
      <Menu />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
     </> 
     </BrowserRouter>
  )
}

export default App;