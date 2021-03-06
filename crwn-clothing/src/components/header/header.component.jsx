import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser})=>(
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="shop" className="option"> shops</Link>
            <Link to="/" className="option"> Contact</Link>
            {
                currentUser ? <div onClick={auth.signOut} className="option">Sign Out</div> : 
                <Link to="/signin" className="option">Sign In</Link>
            }
        </div>
        
    </div>
);
export default Header;