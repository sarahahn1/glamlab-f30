import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => setShowMenu(!showMenu)
    const username = useSelector(state => state.username)
    return (
        <header>
            <h1> GLAMLAB </h1>
            <BiMenu size ="40px" style={{zIndex: 3}} onClick={handleMenu}/>
            <nav className={showMenu ? 'menu-show' : 'menu-hide'}>
                <h6>{username !== "" ? username : "makeup"}</h6>
                <Link to="/">
                <button onClick={handleMenu}>Home</button>
                </Link>
                
                <Link to="/product">
                <button onClick={handleMenu}>shop here</button>
                </Link>

                <Link to="/auth">
                <button onClick={handleMenu}>Login</button>
                </Link>

            </nav>
            
        </header >
        
    )
}
export default Header