import React from 'react';
import './login.css';
import { FaUserAlt, FaKey } from "react-icons/fa";

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
               <h1>Login</h1> 
               <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUserAlt className='icon'/>
               </div>
               <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaKey className='icon'/>
               </div>

               <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <div className="button-wrapper">
                    <button type="submit">Login</button>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;