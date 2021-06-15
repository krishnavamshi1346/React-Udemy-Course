import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const[posts,setposts]=useState([])
  
  async function getdata(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')

    console.log(await response.json())

  }
  function getdatafromaxios()
  {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (response)=>{console.log(response.data)
        setposts(response.data)
      })
    .catch((error)=>{console.log(error)})
  }

  const titles=posts.map((post)=>{
    return(
      <h1>{post.id} {post.title}</h1>
    )
  })


  return (
    <div className="App">
      <h1>Http Methods</h1>
      <button onClick={getdata}>Get Data From Api</button>
      <button onClick={getdatafromaxios}>getdatafromaxios</button>
      {titles}
    </div>
  );
}

export default App;
