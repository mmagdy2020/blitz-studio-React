import React, { Component } from "react";
import { Line } from 'rc-progress';

class LineProgress extends Component {

    render() {
        let user = this.props.user;
        user.attendance = 10;

        let progress = <div className="progress-line">
            <img style={{ width: 100, height: 100, borderRadius: '50px' }} src={user.imgUrl} alt={user.name} />
            <span>{user.name}</span>
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
        </div>;
        return (
            <React.Fragment>
                {progress}
            </React.Fragment>
        );
    }
}

export default LineProgress;