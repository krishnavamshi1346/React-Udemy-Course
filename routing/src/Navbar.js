import React from "react"
import  "./nav.css"
import {Link} from 'react-router-dom'
import Services from './Services';
import Home from './Home';
function Navbar()
{
    return <div>
    <ul>
       <Link to='/home'> <li>Home</li></Link>
        <Link to='/services'>  <li>Services</li></Link>
       <Link to='/contactus'> <li>Contact</li></Link>
    </ul>
        </div>
}
export default Navbar;