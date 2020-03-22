import React from "react";
import styles from "./Users.module.css";
import UsersHeader from "./UsersHeader/UsersHeader";
import UserItem from "./UserItem/UserItem";

const Users = () => {
    return (
        <div className={styles.userBlock}>
            <UsersHeader/>
            <div className={styles.users}>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
            </div>
        </div>
    )
};

export default Users;