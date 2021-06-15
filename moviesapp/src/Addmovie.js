import  React, { useState, useContext }  from 'react';
import {Moviesprovider} from './Moviescontext'
function Addmovie()
{
    const[moviename,changemoviename]=useState("")
    const[director,changedirector]=useState("")
    const obj=useContext(Moviesprovider)
    function add()
    {
        var movie={
            moviename:moviename,
            director:director
        }
        obj.addmovie(movie)
    }
    
 return <div>
     <h1>Addmovie</h1>
     <input type="text" placeholder="Movie Name" value={moviename} onChange={(e)=>{changemoviename(e.target.value)}}></input>
     <br/>
     <input type="text" placeholder="director" value={director} onChange={(e)=>{changedirector(e.target.value)}}></input>
     <br/>
     <button onClick={add}>add</button>
 </div>   
}
export default Addmovie;