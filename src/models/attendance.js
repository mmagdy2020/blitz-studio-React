import moment from 'moment';

export default class AttendanceModel {
    constructor(userId, classId, date) {
        this.userId = userId;
        this.classId = classId;
        this.attendance = 0;
        this.date = date || moment().format('YYYY-MM-DD');
    }
}