export default class Attendance {
    constructor(userId, classId, date) {
        this._id = '';
        this.userId = userId;
        this.classId = classId;
        this.attendance = 0;
        this.date = date;
    }
}