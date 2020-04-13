import React from 'react';

const CircleImg = (props) => {
    let user = props.user;
    user.imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png';
 
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