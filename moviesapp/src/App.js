import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Movieslist from './Movieslist'
import Addmovie from './Addmovie' 
import { Moviesprovider } from './Moviescontext';
import Moviescontext from './Moviescontext'
function App() {
  return (
    <div className="App">
     <h1>Moviesapp</h1>
     <Moviescontext>
     <Navbar/>
     <Addmovie/>
     <Movieslist/>
     </Moviescontext>
    </div>
  );
}

export default App;
