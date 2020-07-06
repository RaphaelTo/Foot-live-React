import React, { useState } from 'react';

const NavBar = () => {

    const [displayContains, setDisplayContains] = useState({ competition: false, match: false});

    const changeContains = (displayDiv) => {
        if(displayDiv === "competition") setDisplayContains({competition: true, match: false});
        if(displayDiv === "match") setDisplayContains({competition: false, match: true});
    }


    return (
        <>
            <ul data-testid="ulValue">
                <li onClick={() => changeContains('competition')}>Compétition</li>
                <li onClick={() => changeContains('match')}>Matchs</li>
            </ul>
        </>
    )
}

export default NavBar;