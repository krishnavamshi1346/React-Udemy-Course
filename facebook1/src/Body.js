import { React, useState } from 'react';
function Body()
{
    const[name,setname]=useState('')
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    function register(event){
        event.preventDefault();
            var users=JSON.parse(localStorage.getItem('users')||'[]')
            var newuser={
                name:name,
                username:username,
                password:password
            }
            users.push(newuser)
            localStorage.setItem('users',JSON.stringify(users))
            alert('registration successful')

    }
    return <div>
          <div className="row justify-content-center ">
            <div className="col-md-6">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="connection"></img>

            </div>
            <div className="col-md-4">
                <h1>register</h1>
                <form onSubmit={register}>
                    <input type="text" placeholder="name" className="form-control"  value={name} onChange={(e)=>setname(e.target.value)} />
                    <input type="text" className="form-control" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}></input>
                    <input type="password" className="form-control" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                    <button className="btn btn-primary btn-lg" >Submit</button>
                </form>
                </div>
            </div>
        </div>
    
}
export default Body