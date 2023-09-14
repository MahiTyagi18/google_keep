import React from 'react';
import '../App.css';
import logo from '../img/logo.jpg';

const Header =()=>{
    return(
        <>
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>Tokeep</h1>
        </div>
        </>
    )
}
export default Header;
