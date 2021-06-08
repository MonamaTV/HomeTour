import React, { useState } from 'react';
import './Header.css';
import { CgMenu, BiLogIn, FiSearch, CgClose} from 'react-icons/all';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="nav-items">
                    <div className="menu-button" onClick={() => setShowMenu(!showMenu)}>
                       {!showMenu ?  <CgMenu /> : <CgClose/>}
                    </div>
                    <Link className="logo" to="/">
                        <h4>HT</h4>
                    </Link>
                </div>
                <div className="nav-menu">
                    <FiSearch className="search-icon" />
                    {/* <input type="search" placeholder="Search tournament"/>
                    <a href="">Register as sponsor</a> */}
                </div>
            </nav>
            <div className={`side-menu ${showMenu && 'show-width'}`}>
                <div className="side-menu-items">
                    <div className="links">

                        <NavLink 
                            activeClassName="active-side-menu-item" 
                            to="/tournaments">
                            Tournaments
                        </NavLink>

                        <NavLink   
                            activeClassName="active-side-menu-item" 
                            to="/fees">
                            Fees
                        </NavLink>

                        <NavLink 
                            activeClassName="active-side-menu-item" 
                            to="/about">
                            About us
                        </NavLink>

                        <NavLink 
                            activeClassName="active-side-menu-item" 
                            to="/contact">
                            Contacts
                        </NavLink>

                        <NavLink 
                            activeClassName="active-side-menu-item" 
                            to="/sponsor/register">
                            Become a sponsor
                        </NavLink>
                    </div>
                    <div className="start-menu-item">
                        <a href="/login" className="login-btn">Login <BiLogIn /> </a>
                    </div>
                </div>
            </div>
       </>
    );
};

export default Header;