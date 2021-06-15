import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  /*const[username,setusername]=useState('')
  function addstorage()
  {
    localStorage.setItem('username',username)
  }
*/

const[language,setlanguage]=useState('')
const[framework,setframework]=useState('')
function addlocalstorage()
{
  var courses=JSON.parse(localStorage.getItem('courses')||"[]")
  var course={
    language:language,
    framework:framework
  }
  courses.push(course)
localStorage.setItem('courses',JSON.stringify(courses))
}

  return (
    <div className="App">
      <input type="text"  placeholder="language" value={language} onChange={(e)=>{setlanguage(e.target.value)}}/>
      <br/>
      <input type="text"  placeholder="framework" value={framework} onChange={(e)=>{setframework(e.target.value)}}/>
      <br/>
      <button onClick={addlocalstorage}>Storage</button>
    </div>
  );
}

export default App;
