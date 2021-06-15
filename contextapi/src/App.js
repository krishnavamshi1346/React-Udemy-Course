import React from 'react';
import logo from './logo.svg';
import './App.css';
import Moviescontext from './Moviescontext'
import A from './A'
import B from './B'
function App() {
  return (
    <div className="App">
      <h1>This is Context API Module</h1>
      <Moviescontext>
      <A/>
      <B/>
      </Moviescontext>
    </div>
  );
}

export default App;
