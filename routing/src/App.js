import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbr from './Navbar';
import Home from './Home';
import Services from './Services';
import Contactus from './Contactus';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <BrowserRouter>
      <Navbr/>
      <Route path="/home" component={Home} exact/>
      <Route path="/contactus" component={Contactus} exact/>
      <Route path="/services" component={Services} exact/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
