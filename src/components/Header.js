import React from 'react'
import "../style/Header.css"
import Logo from "../assets/Logo_Ghibli.svg"
function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Ghibli studio logo"/>
            <div className="tite">
                Memory card game
            </div>
        </div>
    )
}

export default Header
