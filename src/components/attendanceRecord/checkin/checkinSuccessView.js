import React from 'react';
import CircleImgWithName from '../sharedComponents/circleImgWithName';
import { Line } from 'rc-progress';

import { groupDuplicates } from '../helper';


const classColorCode = {
    salsa: '#fd7e14',
    bachata: '#4caf50',
    connection: '#17a2b8'
};

const danceClasses = {
    "5e910fbd512ace828c4defd0": "SALSA"
}

const CheckinSuccessView = (props) => {
    let user = props.user;
    let checkedinClassesView;

    if (user.attendances.length > 0) {
        user.attendances = groupDuplicates(user.attendances);

        user.attendances = user.attendances.filter(attendance => {
            let foundIndex = user.checkedInClasses.findIndex(c => c.classId === attendance.classId);
            console.log(foundIndex);
            if (foundIndex !== -1) {
                return attendance;
            }
        });
    }

    if (user.attendances.length > 0) {
        checkedinClassesView = user.attendances.map(attendance => (<div key={attendance.classId}>
            <Line 
                percent={attendance.count}
                strokeWidth={2}
                strokeColor={classColorCode.salsa} />
            <p>{danceClasses[attendance.classId]}</p>
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
