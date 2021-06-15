import React, { useContext } from "react"
import { Moviesprovider } from './Moviescontext';
function B()
{
    const obj=useContext(Moviesprovider)
    function Change()
    {
     obj.changemovie();   
    }
    return <div style={{backgroundColor:"red"}}>
        <h1>This is B Component</h1>
        <h2>Movie Director is{obj.director}</h2>
        <button style={{margin:"10px"}} onClick={Change}>Change Movie</button>
        </div>
}
export default B;