import React from "react";
import '../../Styles/Components/Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                Logo
            </div>
            <ul className="navbar__list">
                <li><a href="/#">Play</a></li>
                <li><a href="/#">Leaderboard</a></li>
                <li><a href="/#">Statistics</a></li>
                <li><a href="/#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Navbar;