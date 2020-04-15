import React from 'react';
import CircleImgWithName from '../sharedComponents/circleImgWithName';
import { Line } from 'rc-progress';

import { groupDuplicates } from '../helper';


const classColorCode = {
    salsa: '#fd7e14',
    bachata: '#4caf50',
    connection: '#17a2b8'
};

const CheckinSuccessView = (props) => {
    console.log('CheckinSuccessView props:...', props);
    const user = props.user;
    let checkedinClassesView;

    // grouping attendances for the same class
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
        checkedinClassesView = user.attendances.map(attendance => {
            let dc = props.danceClasses.find(c => c._id === attendance.classId);

            return <div key={attendance.classId}>
            <Line
                percent={attendance.count}
                strokeWidth={2}
                strokeColor={classColorCode.bachata} />
            <p>{dc? dc.title: ''}</p>
            </div>
        });
    }

    return (
        <div className="checkedin-success">
            {/* <CircleImgWithName title={props.title} user={props.user} /> */}
            <div style={{ backgroundColor: 'azure', padding: '20px' }}>
                <h4>Balance:  </h4>
                <strong style={user.balance  > 0 ? { color: 'green' } : { color: 'red' }}> $  {user.balance.toFixed(2)}</strong>
            </div>
            
            <div className="checkedin-class">
                {checkedinClassesView}
              
            </div>

        </div>
    );
}

export default CheckinSuccessView;
