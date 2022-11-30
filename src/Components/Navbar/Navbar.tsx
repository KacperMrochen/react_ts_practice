import React from "react";
import '../../Styles/Components/Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                Logo
            </div>
            <ul className="navbar__list">
                <a href="/#"><li>Play</li></a>
                <a href="/#"><li>Statistics</li></a>
                <a href="/#"><li>Leaderboard</li></a>
                <a href="/#"><li>Settings</li></a>
            </ul>
        </div>
    )
}

export default Navbar;