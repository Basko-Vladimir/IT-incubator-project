import React from "react";
import styles from "./Users.module.css";
import UsersHeader from "./UsersHeader/UsersHeader";
import UserItem from "./UserItem/UserItem";
import PropTypes from "prop-types";


const Users = (props) => {
    return (
        <div className={styles.userBlock}>
            <UsersHeader/>
            <div className={styles.users}>
               {props.users.map( u => <UserItem key = {u.id}
                                                user = {u}
                                                isFollow = {u.isFollow}
                                                follow = {props.follow}
                                                unfollow = {props.unfollow} />)}
            </div>
        </div>
    )
};

export default Users;
Users.propTypes = {
    users: PropTypes.array
};