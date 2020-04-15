export default class AttendanceRecord {
    constructor(userId) {
        this._id = '';
        this.userId = userId;
        this.attendances = [Attendance];
    }
}


class Attendance {
    constructor(userId, classId, date) {
        this._id = '';
        this.userId = userId;
        this.classId = classId;
        this.attendance = 0;
        this.date = date;
    }
}