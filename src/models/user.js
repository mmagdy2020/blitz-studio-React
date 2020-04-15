import axios from 'axios';
export default class User {
  static ROLES = {ADMIN: "admin", USER: "user"}
  constructor(id, first, last, email, phone, isMiuStudent, role, password, imgUrl, balance) {
    this._id = id;
    this.firstname = first;
    this.lastname = last;
    this.name = this.firstName + ' ' + this.lastName;
    this.imgUrl = imgUrl || process.env.REACT_APP_IMG_URL;
    this.email = email;
    this.phone = phone;
    this.isMiuStudent = isMiuStudent;
    this.role = role || User.ROLES.USER;
    this.password = password;
    this.balance = balance || 0;
    this.attendances = [];
  }

  /**
   * Given a username and password, will attempt to authenticate a user
   *
   * @static
   * @param {string} email
   * @param {string} password
   * @returns {User} that was logged in, or null if not authenticated.
   * @memberof User
   */
  static async LogInUser(email, password) {
    let foundUser = null;

    const response = await axios.post('/users/authenticate', { email: email, password: password });
    console.log("authenticate response:", response);
    let data = response.data;
    if (data) {
      foundUser = new User(data._id, data.firstname, data.lastname, data.email, data.phone, data.isMiuStudent, data.role, data.password, data.imgUrl, data.balance);
      console.log("foundUser:", foundUser);
    }
    return foundUser;
  }

  /**
   * Add user to database
   *
   * @static
   * @param {User} user
   * @returns {User | null} Returns newly added user, or null if failed due to existing user in system
   * @memberof User
   */
  static async AddNewUser(user) {

    const existsResponse = await axios.post('/users/exists', { email: user.email });
    console.log("existsResponse", existsResponse);

    if (existsResponse.data.userExists) { return null }

    // add new user to all users
    user.role = User.ROLES.USER;
    const createResponse = await axios.post('/users', user);
    console.log("createUserResponse:", createResponse);
    return createResponse.data;
  }

  /**
   * Fetches list of all users in database
   *
   * @static
   * @returns {[User]} Array of all Users in the database
   * @memberof User
   */
  static async GetAllUsers() {
    const response = await axios.get('/users');
    console.log("get all users response:", response);
    return Array.from(response.data) || [];
  }

  /**
   * Remove user from database given user id
   *
   * @static
   * @param {String} id
   * @returns {Boolean} success
   * @memberof User
   */
  static async DeleteUserById(id) {
    const response = await axios.delete('/users/' + id);
    console.log("response to DeleteUserById:", response);
    return response.status === 201;
  }

  /**
   * Update user information
   *
   * @static
   * @param {User} user object with properties _id and whatever other properties are to be udpated.
   * @returns {User} updated User object
   * @memberof User
   */
  static async UpdateUser(user) {
    const response = await axios.patch('/users/' + user._id, user);
    console.log("updateUserResponse", response);
    return response.data;
  }
  /**
   * Get user from database given user id
   *
   * @static
   * @param {String} id
   * @returns {Boolean} success
   * @memberof User
   */
  static async FindUserById(id) {
    const response = await axios.get('/users/' + id);
    console.log("response to FindUserById:", response);
    return response.data;
  }
}

