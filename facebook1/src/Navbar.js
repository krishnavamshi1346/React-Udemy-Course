import { React, useState } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useHistory } from 'react-router';
function Navbar(){
    const [username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const history=useHistory()
    function login()
    {
        var users=JSON.parse(localStorage.getItem('users'))
        var i=0
        for(var user of users){
            if(user.username==username && user.password==password){
                    i++;
            }
        }
        if(i==1){
            alert('Login successful')
            history.push('/dashboard')
            localStorage.setItem('loggedin','loggedin')
        }
        else{
            alert('Login Failed')
        }
    }
    function logout()
    {
        localStorage.removeItem('loggedin')
        history.push('/')
        window.location.reload()
    }
    return <div>
            <div className='row nav'>
                <div className='col-md-6'><h1>Facebook</h1></div>
                <div className='col-md-6'>
                    {
                        (()=>{
                                if(localStorage.getItem('loggedin')){
                                    return<button onClick={logout}>LOGOUT</button>
                                }
                                else{
                                    return <div>
                                    <form onSubmit={login}>
                                    <input type='text' placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                                    <input type='password' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                                     <button>Login</button>
                                     </form>
                                     </div>
                                     }
                        })()
                    }
                     
                    
                </div>
            </div>
           
        </div>
}
export default Navbar