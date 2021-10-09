import React from 'react'
import './Navbar.scss'



const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"Navbar " + (menuOpen && "active")}  >
            <div className="Wrapper">
                <div className="left">
                    <a href="#Intro" className="logo">Bum Hyun Kim</a>
                    <div className="itemContainer">
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => { setMenuOpen(!menuOpen) }}>
                        <span className="lineOne"></span>
                        <span className="lineTwo"></span>
                        <span className="lineThree"></span>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Navbar
