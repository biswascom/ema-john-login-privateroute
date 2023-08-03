import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <nav className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
                <p className='userName'>{user?.displayName}</p>
            </div>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/register">Register</Link>
                {
                    user ? <Link onClick={handleLogout}>Logout</Link> : <Link to="/login">Login</Link>

                }
            </div>
        </nav>
    );
};

export default Header;