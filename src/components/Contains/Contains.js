import React from 'react';
import Competition from '../Competition/Competition';
import Match from '../Match/Match';

const Contains = ({display}) => {

    return (
        <>
            <div className="contain">
                {display.competition ? <Competition /> : null}
                {display.match ? <Match /> : null} 
            </div>
        </>
    )
}

export default Contains;