import React from 'react';
import logo from './logo.svg';
import './App.css';
import Myfunction from './Second';
import CC from './CC';
function App() {
  return (
    <div className="App">
        <h1 style={{color:'red',backgroundColor:'green'}}>This is css in React</h1>
        <p>This is Paragraph</p>
        <p className='c1'>This is using className in css</p>
        <CC/>
        <Myfunction/>    
    </div>

  );
}

export default App;
