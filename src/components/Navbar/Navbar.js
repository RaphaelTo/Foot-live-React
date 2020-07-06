import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () => {

    const [displayContains, setDisplayContains] = useState({ competition: false, match: false});

    const changeContains = (displayDiv) => {
        if(displayDiv === "competition") setDisplayContains({competition: true, match: false});
        if(displayDiv === "match") setDisplayContains({competition: false, match: true});
    }


    return (
        <>
            <header>
                <nav className="navbar-menu">
                    <ul data-testid="ulValue">
                        <li onClick={() => changeContains('competition')}>Compétition</li>
                        <li onClick={() => changeContains('match')}>Matchs</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;