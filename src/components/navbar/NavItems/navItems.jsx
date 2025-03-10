import './navItems.css'
import SearchBox from '../SearchBox/searchBox'
import React, { useState, useEffect } from 'react'


function NavItems() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => setToggleMenu(!toggleMenu)
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (
        <div className="nav">
            
            {(toggleMenu || screenWidth > 800) && (
                <div className="nav-items">
                    <SearchBox />
                    <a className="content" href="#">
                        Login
                    </a>
                    <span className="separator">
                    </span>
                    <a className="content" href="#">
                        Sign up
                    </a>
                </div>
            )}
            <button className="responsive btn" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1c0c5b">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                </svg>
            </button>
        </div>
    )
}

export default NavItems