import React from 'react';
import './Login.css';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h2 className='heading'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;