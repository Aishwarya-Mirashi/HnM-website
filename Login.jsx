import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
// import {useNavigate} from 'react-router';

const Login = () => {
    
    // const history = useNavigate()

    const [user, setUser] = useState({
      email : '',
      password : ''
    });
  
    // Handle Input
    const handleChange = (event) =>{
      let name = event.target.name
      let value = event.target.value
  
      setUser({...user, [name]:value})
    }
  
    // Handle Login
    const handleSubmit = async (event) =>{
      event.preventDefault();
      const {email, password} = user;
      try {
        const res = await fetch('/login', {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            email, password
          })
        });
  
        if(res.status === 400 || !res){
          window.alert("Invalid Credentials")
        }else{
          window.alert("Login Successfull");
          window.location.reload();
          // history.push('/')
          // Token is generated When we Logged In.
          // Now we need to create Schema for Messages
        }
  
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter your Credentials to Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Login</h1>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1 ">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

