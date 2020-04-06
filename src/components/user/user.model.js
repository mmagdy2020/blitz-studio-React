// import react from 'react';
export default class User {
  constructor(id, first, last, email, phone, isMiuStudent, role) {
    this.id = id;
    this.firstname = first;
    this.lastname = last;
    this.email = email;
    this.phone = phone;
    this.isMiuStudent = isMiuStudent;
    this.role = role || "User";
  }
}