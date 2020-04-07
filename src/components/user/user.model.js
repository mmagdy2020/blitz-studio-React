// import react from 'react';
import axios from 'axios';
export default class User {
  constructor(id, first, last, email, phone, isMiuStudent, role, password) {
    this._id = id;
    this.firstname = first;
    this.lastname = last;
    this.email = email;
    this.phone = phone;
    this.isMiuStudent = isMiuStudent;
    this.role = role || "user";
    this.password = password;
  }
  static async LogInUser(email, password) {
    let foundUser = null;

    const response = await axios.post('/users/authenticate', { email: email, password: password });
    console.log("authenticate response:", response);
    let data = response.data;
    if (data) {
      foundUser = new User(data._id, data.firstname, data.lastname, data.email, data.phone, data.isMiuStudent, data.role, data.password);
      console.log("foundUser:", foundUser);
    }
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
  static async AddNewUser(user) {

    const existsResponse = await axios.post('/user/exists', { email: user.email });
    console.log("existsResponse", existsResponse);

    if (existsResponse.data.userExists) { return null }

    // add new user to all users
    user.role = "user";
    const createResponse = await axios.post('/user', user);
    console.log("createUserResponse:", createResponse);
    return createResponse.data;
  }

  static async GetAllUsers() {
    const response = await axios.get('/users');
    console.log("get all users response:", response)
    return Array.from(response.data) || [];
  }
}
