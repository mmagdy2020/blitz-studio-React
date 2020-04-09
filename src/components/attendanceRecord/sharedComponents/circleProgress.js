import React, { Component } from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './sharedComponent.scss';

class CircleProgress extends Component {

    render() {
        let user = this.props.user;
        let name = user.firstname + ' ' + user.lastname;
        user.imgUrl = 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png';
        let progress = (
            <div className="progress-circle">
                <CircularProgressbarWithChildren
                    value={user.attendance}
                >

                    <img id="img-inside-circle" src={user.imgUrl} alt={name} />
                    <span>{name}</span>
                    <div>
                        <strong>{user.attendance}%</strong>
                    </div>

                </CircularProgressbarWithChildren>
            </div>
        );
        
        return (
            <React.Fragment>
                {progress}
                <span>{this.props.caption}</span>
            </React.Fragment>
        );
    }
}

export default CircleProgress;