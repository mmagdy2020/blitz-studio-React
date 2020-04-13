import React from 'react';
import CircleImgWithName from '../sharedComponents/circleImgWithName';
import { Line } from 'rc-progress';

const classColorCode = {
    salsa: '#fd7e14',
    bachata: '#4caf50',
    connection: '#17a2b8'
};

const CheckinSuccessView = (props) => {
    let user = props.user;
    let checkedinClassesView;
    if (user.checkedInClasses.length > 0) {
        checkedinClassesView = user.checkedInClasses.map(c => (<div>
            <Line percent={user.attendance}
                strokeWidth={3}
                strokeColor={classColorCode.salsa} />
            <p>{c.title}</p>
        </div>));
    }

    return (
        <div className="checkedin-success">
            <CircleImgWithName title={props.title} user={props.user} />

            <div className="checkedin-class">
                {checkedinClassesView}
            </div>

        </div>
    );
}

export default CheckinSuccessView;
