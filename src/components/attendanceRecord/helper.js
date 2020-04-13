import axios from 'axios';
import AttendanceModel from '../../models/attendance';




export const createAttendance = async (checkedInClasses, userId) => {
    let response = await Promise.all(checkedInClasses.map(async (c) => {
        let newAttendance = new AttendanceModel(userId, c.classId);

        return await
            axios.post(axios.defaults.baseURL + '/attendances', newAttendance)
    }));

    return response.data;
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
