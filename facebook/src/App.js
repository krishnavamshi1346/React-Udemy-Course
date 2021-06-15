import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard'
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route path="/" component={Body} exact></Route>
      <Route path='/dashboard' component={Dashboard}exact></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
