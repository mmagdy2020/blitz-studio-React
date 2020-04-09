import React, { Component } from "react";
import { Line } from 'rc-progress';
import CircleImgWithName from '../sharedComponents/circleImg';

class LineProgress extends Component {

    render() {
        let user = this.props.user;
        user.attendance = 10;


        let progress = (
            <div className="progress-line">
                <CircleImgWithName user={user} />
                <Line
                    percent={user.attendance}
                    strokeWidth={4}
                    strokeColor="#4caf50"
                />
                <span>Bachata</span>
                <Line
                    percent={user.attendance}
                    strokeWidth={4}
                    strokeColor="#fd7e14"
                />
                <span>{this.props.caption}</span>
                <Line
                    percent={user.attendance}
                    strokeWidth={4}
                    strokeColor="#17a2b8"
                />
                <span>Connection Dance Workshop</span>
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