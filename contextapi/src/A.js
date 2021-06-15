import React, { useContext } from "react"
import { Moviesprovider } from './Moviescontext';
function A()
{
    const obj=useContext(Moviesprovider)
    function change()
    {
     obj.changedirector();   
    }
    return <div style={{backgroundColor:'blue'}}>
        <h1>This is A Component</h1>
    <h2>Movie name is {obj.movie}</h2>
    <button style={{margin:"10px"}} onClick={change}>Change Director</button>    
        </div>
}
export default A;