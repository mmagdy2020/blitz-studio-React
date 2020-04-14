import React from 'react';
import Attendance from './attendance';
import SearchWithBtn from '../sharedComponents/search';
import { getClasses, getUserAttendance, createSingleAttendance, updateUserBalance} from '../helper';

class UserListWithAttendance extends React.Component {

    state = {
        users: this.props.users,
        attendanceFetched: false,
        danceClasses: [],

        attendanceDate: '',
        attendedClass: '',
        query: ''
    }

    onShowAttendancClick = async () => {
        // get attendance history for each user
        let response = this.props.users.map(async (u) => {
            const res = await getUserAttendance(u._id);
            u.attendances = res;
            return u;
        });

        let usersWithAttendance = await Promise.all(response);

        this.setState({ users: usersWithAttendance, attendanceFetched: !this.state.attendanceFetched })
    }

    onAttendanceEditInputChange = (event) => {
        console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    onSearchInputChange = (event) => {
        console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });

        let pattern = new RegExp(this.state.query, 'gi');
        // filtering users
        let usersCoppy = this.state.users;
        let filtered = usersCoppy.filter(user => (pattern.test(user.firstname) || pattern.test(user.lastname)));

        // let highlightedUsers = filtered.map(user => {
        //     user.firstname = user.firstname.replace(pattern, `<b>${this.state.query}</b>`);
        //     user.lastname = user.lastname.replace(pattern, `<b>${this.state.query}</b>`);
        //     return user;
        // });

        this.setState({
            users: filtered
        });
    }

    onSearchBtnClick = () => {
        console.log(this.state);
        let pattern = new RegExp(this.state.query, 'g');
        // filtering users
        let usersCoppy = this.state.users;
        // let filtered = usersCoppy.filter(user => (pattern.test(user.firstname) || pattern.test(user.lastname)));

        // let highlightedUsers = usersCoppy.map(user => {
        //     user.firstname = user.firstname.replace(pattern, <b>{this.state.query}</b>);
        //     user.lastname = user.lastname.replace(pattern, this.state.query);
        //     return user;
        // });

        this.setState({
            users: usersCoppy
        });
    }

    onSaveBtnClick = async (event, user) => {
        event.preventDefault();
        console.log(event.target);
        console.log(user);
        let classId = this.state.attendedClass;

        console.log('this.state.attendedClass : ', classId)
        if (classId) {
           
        // creating a new attendance record
            let response = await createSingleAttendance(classId, user._id);
            console.log('Inside onSaveBtnClick...new attendance created!', response);

            // refresh attendace list
            await this.onShowAttendancClick();

            // update state
            this.setState({
                attendanceDate: '',
                attendedClass: '',
                attendanceFetched: true
            });


            // make a patch request to /users/userId to update the balance
            response = await updateUserBalance(user);

            console.log('Inside onSaveBtnClick...user balance updated!', response);

            // make a get request to /users to get the update users information

 
        }

    }

    async componentDidMount() {
        let response = await getClasses();
        console.log('all dance classes: ', response);
        
        this.setState({
            danceClasses: response
        });
    }
    render() {
        let header, search, attendanceList = '';

        if (this.state.attendanceFetched) {
            search = <SearchWithBtn
                query={this.state.query}
                onSearchInputChange={this.onSearchInputChange}
                onSearchBtnClick={this.onSearchBtnClick}
            />;

            header = (
                < div className="attendancelist-header" >
                    <div className="header-item"> User Name </div>
                    <div className="header-item">Dance Class</div>
                    <div className="header-item">Date</div>
                    <div className="header-item">Action</div>
                </div >

            );

            attendanceList = this.state.users.map(user => <Attendance
                key={user._id}
                danceClasses={this.state.danceClasses}
                user={user} 
                attendanceDate={this.state.attendanceDate}
                attendedClass={this.state.attendedClass}
                onAttendanceEditInputChange={this.onAttendanceEditInputChange}
                onSaveBtnClick={this.onSaveBtnClick}
            />
            );
        }

        return (
            <div className="attendance-content">
                <button className="btn btn-primary" onClick={() => this.onShowAttendancClick()}>Show Attendance</button>

                {search}
                {header}
                {attendanceList}
            </div>
        )
    }
}

export default UserListWithAttendance;