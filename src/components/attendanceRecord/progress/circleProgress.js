import React, { Component } from "react";
import { Line } from 'rc-progress';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class CircleProgress extends Component {

    render() {
        let user = this.props.user;
        let progress = <CircularProgressbarWithChildren
            value={user.attendance}
        >
            <img style={{ width: 100, height: 100, borderRadius: '50px' }} src={user.imgUrl} alt={user.name} /><span>{user.name}</span>
            <div style={{ fontSize: 12, marginTop: 5 }}>
                <strong style={{ fontSize: '20px' }}>{user.attendance}%</strong>
            </div>
        </CircularProgressbarWithChildren> 
        return (
            <React.Fragment>
                {progress}
                <span>{this.props.caption}</span>
            </React.Fragment>
        );
    }
}

export default CircleProgress;