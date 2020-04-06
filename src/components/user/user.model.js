// import react from 'react';
export default class User {
  static ALL_USERS = [
    new User(1, "Admin", "User", "admin@admin.admin", "1231231231", false, "admin", "admin")
  ]
  constructor(id, first, last, email, phone, isMiuStudent, role, password) {
    this.id = id;
    this.firstname = first;
    this.lastname = last;
    this.email = email;
    this.phone = phone;
    this.isMiuStudent = isMiuStudent;
    this.role = role || "user";
    this.password = password;
  }
  static LogInUser(email, password) {
    let foundUser = null;
    this.ALL_USERS.forEach(element => {
      if (element.email === email && element.password === password) {
        foundUser = element;
      }
    });
    return foundUser;
  }

  /**
   * Add user to database
   *
   * @static
   * @param {*} user
   * @returns user object that was just added, else null in case of duplicate email
   * @memberof User
   */
  static AddNewUser(user) {
    let userAlreadyExists = false;
    this.ALL_USERS.forEach(element => {
      if (element.email === user.email) {
        userAlreadyExists = true;
      }
    });
    if (userAlreadyExists) { return null }

    // add new user to all users
    user.role = "user";
    this.ALL_USERS.push(user);
    return user;
  }

  static GetAllUsers() {
    return this.ALL_USERS;
  }
}
