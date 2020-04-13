import React, { Component } from "react";
import { Line } from 'rc-progress';
// import CircleImgWithName from './circleImg';
import CircleImg from './circleImg'

class LineProgress extends Component {

    render() {
        let user = this.props.user;
        // user.attendance = 10;
        console.log('user in LinProgress: ', user)

        let progress = (
            <div className="progress-line">
                <CircleImg user={user} />
                <p>{user.firstname}</p>
                <Line
                    percent={user.attendance}
                    strokeWidth={4}
                    strokeColor="#4caf50"
                />
                <span>Bachata</span>
            </div>
        );
        return (
            <React.Fragment>
                {progress}
            </React.Fragment>

        );
    }
}

export default LineProgress;