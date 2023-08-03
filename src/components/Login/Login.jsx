import React, { useContext, useRef, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginUser, resetPassword } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        // firebase
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('Successfully registered!');

                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please input your email address to reset password!');
            return
        }
        resetPassword(email)
            .then(() => {
                alert('Please your check your email!')
                setSuccess('');
            })
            .catch(() => {
                setError(error.message);
            })
    }
    return (
        <div>
            <h2 className='heading'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" ref={emailRef} placeholder='Email' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder='Password' />
                </div>
                <div className='btn'>
                    <p className='para'>Do not have an account? Please <Link to="/register">Register</Link></p>
                    <Link className='reset' onClick={handleResetPassword}>Reset Password</Link>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <p className='success'>{success}</p>
                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default Login;