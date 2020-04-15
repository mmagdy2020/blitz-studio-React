import React from 'react';
import CircleImg from './circleImg';

const CircleImgWithName = (props) => {
    let user =  props.user;
    let name = user.firstname + ' ' + user.lastname;
    return (
        <div className="circle-img-name">
            <CircleImg user={user}/>
            <p>{name}</p>
        </div>
    )

}

export default CircleImgWithName;