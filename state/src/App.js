import React from 'react';
import logo from './logo.svg';
import './App.css';
import CC from'./CC'
import Parent from './parentfunction';
//import Parent from './Parent';

function App() {
  return (
    <div className="App">
     <h1>This is Props Lecture</h1>
     <Parent movie='Avengers'/>
     <CC/>
    </div>
  );
}
export default App;
