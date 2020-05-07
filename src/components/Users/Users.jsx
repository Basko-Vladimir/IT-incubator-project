import React from "react";
import styles from "./Users.module.css";
import UsersHeader from "./UsersHeader/UsersHeader";
import UserItem from "./UserItem/UserItem";
import PropTypes from "prop-types";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => {
    return (
        <div className={styles.userBlock}>
            {props.isFetching ? <Preloader/> : null}
            <UsersHeader usersCount={props.totalCount}/>
            <div>
                <Pagination totalCount={props.totalCount}
                            pageSize={props.pageSize}
                            onChangePage={props.onChangePage}
                            currentPage={props.currentPage} />
                <div className={styles.users}>
                    {props.users.map(u => <UserItem key={u.id}
                                                    user={u}
                                                    isFollow={u.isFollow}
                                                    follow={props.follow}
                                                    unfollow={props.unfollow}
                                                    isFollowUser={props.isFollowUser}
                                                    toggleIsFollowUser={props.toggleIsFollowUser}/>)}
                </div>
            </div>
        </div>
    )
};

export default Users;
Users.propTypes = {
    users: PropTypes.array
};