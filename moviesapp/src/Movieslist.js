import  React, { useContext }  from 'react';
import {Moviesprovider} from "./Moviescontext"
function Movieslist()
{
    const obj=useContext(Moviesprovider)
    const movieslist=obj.movies.map((movie)=>{
        return <div>
            <h1>Movie Name is :{movie.moviename}</h1>
            <p>Director is:{movie.director}</p>
        </div>
    })
 return <div style={{backgroundColor:"green"}}>
     <h1>Movieslist</h1>
    {movieslist}
 </div>   
}
export default Movieslist;