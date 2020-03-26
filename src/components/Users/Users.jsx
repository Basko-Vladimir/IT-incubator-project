import React from "react";
import styles from "./Users.module.css";
import UsersHeader from "./UsersHeader/UsersHeader";
import UserItem from "./UserItem/UserItem";
import PropTypes from "prop-types";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div className={styles.userBlock}>
                <UsersHeader/>
                <div className={styles.users}>
                    {this.props.users.map( u => <UserItem key = {u.id}
                                                     user = {u}
                                                     isFollow = {u.isFollow}
                                                     follow = {this.props.follow}
                                                     unfollow = {this.props.unfollow} />)}
                </div>
            </div>
        )
    }
}

export default Users;
Users.propTypes = {
    users: PropTypes.array
};