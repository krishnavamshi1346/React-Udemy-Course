import  React  from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
function Navbar()
{
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    const history=useHistory()
    function logout()
    {
        localStorage.removeItem('logedin');
        history.push('/')
        window.location.reload(true);
    }
function Login()
    {
        var users=JSON.parse(localStorage.getItem("users"))
        var i=0
        for(var user of users)
        {
            if(user.username==username && user.password==password)
            {
                i++;
                break;
            }
        }
        if(i==1){
            alert("Login Sucess")
            localStorage.setItem('logedin','logedin')
            history.push('/dashboard')
            window.location.reload(true)
        }
        else{
            alert("Login failed")
        }
    }
    return <div>
        <div className="row nav">
            <div className="col-lg-6">
                <h1>Facebook</h1>
            </div>
            <div className="col-lg-6">
            {
                    (()=>{

                        if(localStorage.getItem('logedin'))
                        {
                            return <button onClick={logout}>logout</button>
                        }
                        else{
                            return <div>
                            
                                <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                                <input type="password" placeholder="password" password={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                                <button onClick={Login}>Login</button>
                                </div>
                        }
                    })()
                }
            </div>
        </div>
        </div>
}
export default Navbar;