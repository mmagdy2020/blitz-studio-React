import React, { Component } from "react";
import { Line } from 'rc-progress';

class LineProgress extends Component{

    render() {
        let progress = <Line
            percent={this.props.attendance}
            strokeWidth={4}
            strokeColor="#4caf50"
        />;
        return (
            <React.Fragment>
                {progress}
                <span>{this.props.caption}</span>
            </React.Fragment>
        );
    }
}

export default LineProgress;