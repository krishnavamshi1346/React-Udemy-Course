import React from 'react';
import logo from './logo.svg';
import './App.css';
import CC from './CC';

function App() {
  function click(){
    alert('Button is clicked');
  }
  function write()
  {
    alert("Changing the input");
  }
  function hover()
  {
    alert("Hovering the input");
  }
  return (
    <div className="App">
      <h1>This is Event Handling Section</h1>
      <button onClick={click}>Click me..!!! </button>
      <br/>
      <h1 onMouseOver={hover}>Try to over me</h1>
      <br/> 
      <input type="text" onChange={write}></input>
      <br/>
      <CC/> 
    </div>
  );
}

export default App;
