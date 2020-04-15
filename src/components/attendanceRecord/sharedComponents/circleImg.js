import React from 'react';

const CircleImg = (props) => {
    let user = props.user;
    return (
        <img
            src={user.imgUrl}
            alt={user.firstname}
            style={{
                height: '100px',
                width: '100px',
                borderRadius: '50px'
            }}  />
    )
}

export default CircleImg;