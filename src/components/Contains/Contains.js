import React from 'react';

const Contains = ({display}) => {

    return (
        <>
            <div className="contain">
                <Competion display={display.competition}/>
                <Match display={display.match}/>
            </div>
        </>
    )
}

export default Contains;