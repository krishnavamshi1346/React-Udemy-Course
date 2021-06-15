import React,{useState} from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import swal from 'sweetalert'
function Login()
{
    const[username,setusername]=useState("")
    const[password,setpassword]=useState("")
    function validate(event)
    {
        event.preventDefault()
        if(username=="Javascript" && password=="React")
        {
            swal("Login Succesful","congratulations",'success');
        }
        else
        {
            swal("Login failed","please check correctly",'error');
        }
    }
    return <div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
          <h1>React Authentication</h1>
              <form onSubmit={validate}>
            <input type="text" placeholder=" username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>  
            <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
            </div>  
        </div>
    </div>
}
export default Login;