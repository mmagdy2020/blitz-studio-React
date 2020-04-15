import axios from 'axios';
import AttendanceModel from '../../models/attendance';
import User from '../../models/user';

export const createAttendance = async (checkedInClasses, user) => {
    console.log('inside createAttendance...', user)
    let userId = user._id;
    let response = await Promise.all(checkedInClasses.map(async (c) => {
        let newAttendance = new AttendanceModel(userId, c.classId);

        return await
            axios.post(axios.defaults.baseURL + '/attendances', newAttendance);

    }));

    console.log('response data from helper: ', response.data)
    return response.data;
}

export const createSingleAttendance = async (classId, userId) => {
  
    let newAttendance = new AttendanceModel(userId, classId);

    console.log('response data from helper after newAttendance: ', newAttendance);
    let uri = axios.defaults.baseURL + '/attendances';
    console.log('response data from helper uri: ', uri);

    let response = await axios.post(uri, newAttendance)

    console.log('response data from helper after createing atendance: ', response.data);


    return response.data;
}

export const updateUserBalance = async (user, amount = 10) => {
    let newBalance = user.balance - amount;
    console.log('inside updateUserBalance : ', user);

    let payload = { balance: newBalance, _id: user._id };
    let response = await User.UpdateUser(payload);
    console.log('response data from helper after updating balance : ', response)
    return response;
}

export const getClasses = async (userId) => {
    let response = await axios.get(axios.defaults.baseURL + '/classes');

    return response.data;
}

export const getUserAttendance = async (userId) => {
    let uri = axios.defaults.baseURL + '/attendances?userId=' + userId;

    let response = await axios.get(uri);

    return response.data.result;
}


export const groupDuplicates = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let temp = arr[i];
        let index = newArr.findIndex(item => item.classId === temp.classId);

        if (index === -1) {
            temp.count = 1;
            newArr.push(temp);
        } else {
            newArr[index].count += 1;

        }
    }


    return newArr;
}
