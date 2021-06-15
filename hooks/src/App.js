import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[player,setplayer]=useState('Sachin')
  const[score,setscore]=useState(200)
  const[lang,changelang]=useState('java')
  const[color,changecolor]=useState('red')
  const[bgcolor,changebgcolor]=useState('yellow')
function change(){
setplayer('Dhoni')
setscore(183)
}
useEffect(()=>{
changelang('Python')
},[])
function change1()
{
changecolor('green')
changebgcolor('orange')
}
  return (
    <div className="App">
      <h1>Using Hooks</h1>
      <h1 style={{color:color}}>player is {player}</h1>
      <h1 style={{backgroundColor:bgcolor}}>Score is {score}</h1>
      <button onClick={change}>Clickme to change score
      </button>
      <h1>Given langauge is {lang}</h1>
      <button onClick={change1}>Click me to change colors</button>
    </div>
  );
}

export default App;

