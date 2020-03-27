import React from "react";
import styles from "./Users.module.css";
import UsersHeader from "./UsersHeader/UsersHeader";
import UserItem from "./UserItem/UserItem";
import PropTypes from "prop-types";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.userBlock}>
            {props.isFetching ? <Preloader/> : null}
            <UsersHeader/>
            <div className={styles.usersWrap}>
                <div className={styles.pagesNumberBlock}>
                    {pages.map(u => {
                        return <span key={u}
                                     className={props.currentPage === u ? styles.active : ''}
                                     onClick={() => props.onChangePage(u)}>{u} </span>
                    })}
                </div>
                <div className={styles.users}>
                    {props.users.map(u => <UserItem key={u.id}
                                                    user={u}
                                                    isFollow={u.isFollow}
                                                    follow={props.follow}
                                                    unfollow={props.unfollow}/>)}
                </div>
            </div>
        </div>
    )
};

export default Users;
Users.propTypes = {
    users: PropTypes.array
};