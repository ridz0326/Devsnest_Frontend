import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Menu = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <NavLink exact activeClassName="deco" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="deco" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="deco" to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="deco" to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;