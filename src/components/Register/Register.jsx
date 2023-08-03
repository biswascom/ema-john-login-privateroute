import React from 'react';
import './Register.css';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        
    }
    return (
        <div>
            <h2 className='heading'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder='Name' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;