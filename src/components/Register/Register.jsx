import React, { useContext, useState } from 'react';
import './Register.css';
import { AuthContext } from '../../providers/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const { creatUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        // firebase
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Successfully registered!');

                // userName update
                updateProfile(user, {
                    displayName: name
                })
                    .then(() => { })
                    .catch(error => { setError(error.message) })

                // email verification
                sendEmailVerification(user)
                    .then(() => {
                        alert('Please verify your email')
                    })
                    .catch(error => { setError(error.message) })
            })
            .catch(error => {
                setError(error.message);
            })
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
                <p>Do not have an account? Please <Link to="/login">Login</Link></p>
                <button type="submit">Register</button>
                <p className='success'>{success}</p>
                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default Register;