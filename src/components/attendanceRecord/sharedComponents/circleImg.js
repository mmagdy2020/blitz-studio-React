import React from 'react';

const CircleImgWithName = (props) => {
    let user =  props.user;
    let name = user.firstname + ' ' + user.lastname;
    return (
        <div className="circle-img-name">
            <img src={user.imgUrl} alt={user.name} />
            <span>{name}</span>
        </div>
    )

}

export default CircleImgWithName;