import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[name,setname]=useState('')
  const[age,setage]=useState()
  const[username,setusername]=useState('')
  function printvalues(event)
  {
    event.preventDefault()
   var user={
          name:name,
      age:age,
      username:username
    }
    console.log(user)
  }
  return (
    <div className="App">
      <form onSubmit={printvalues}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="User Name" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="Age" value={age} onChange={(e)=>{setage(e.target.value)}}/>
        <br/>
        <input type="submit" value="submit"/>

      </form>

    </div>
  );
}

export default App;
