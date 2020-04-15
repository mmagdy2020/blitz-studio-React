import React from 'react';

const comingSoon = (props) => {
    return (
        <div>
            <h1>{props.title?props.title.toUpperCase():''}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/coming-soon.png`} alt="coming-soon" />
        </div>
    );
}

export default comingSoon;