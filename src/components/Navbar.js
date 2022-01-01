import React from 'react';
import "../styles/Navbar.css";

function Navbar({setActive}) {
    return (
        <div className='navbar'>
            <p onClick={setActive}><a href='#home'>HOME</a></p>
            <p onClick={setActive}><a href='#about'>ABOUT</a></p>
            <p onClick={setActive}><a href='#portfolio'>PORTFOLIO</a></p>
            <p onClick={setActive}><a href='#contact'>CONTACT</a></p>
        </div>
    )
}

export default Navbar;
