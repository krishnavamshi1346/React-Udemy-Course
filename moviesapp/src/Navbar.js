import  React, { useContext }  from 'react';
import {Moviesprovider} from  './Moviescontext'
function Navbar()
{
    const obj=useContext(Moviesprovider)

 return <div style={{backgroundColor:"teal"}}>
     <h1>Movies count is:{obj.movies.length}</h1>
 </div>   
}
export default Navbar;