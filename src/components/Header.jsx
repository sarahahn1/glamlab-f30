import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => setShowMenu(!showMenu)
    return (
        <header>
            <h1> GLAMLAB </h1>
            <BiMenu size ="40px" style={{zIndex: 3}} onClick={handleMenu}/>
            <nav className={showMenu ? 'menu-show' : 'menu-hide'}>
                
                <Link to="/">
                <button onClick={handleMenu}>Home</button>
                </Link>
                
                <Link to="/product">
                <button onClick={handleMenu}>My Makeup</button>
                </Link>

                <Link to="/auth">
                <button onClick={handleMenu}>Login</button>
                </Link>
            </nav>
        </header >
    )
}
export default Header