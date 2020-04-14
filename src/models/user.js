
export default class User {
    constructor(id, fn, ln, imgUrl, phone, email, pw, isMiuStudent, balance, role) {
        this._id = id;
        this.firstName = fn || 'Jordan';
        this.lastName = ln || 'Walke';
        this.name = this.firstName + ' ' + this.lastName;
        this.imgUrl = imgUrl || process.env.REACT_APP_IMG_URL;
        this.phone = phone;
        this.email = email;
        this.password = pw;
        this.isMiuStudent = isMiuStudent;
        this.balance = balance||0;
        this.role = role || 'user';
        this.attendances = [];
    
    }

}