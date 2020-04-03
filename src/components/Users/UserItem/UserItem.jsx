import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <NavLink className={styles.userProfileLink} to={`/profile/${props.user.id}`}>
                    <img src={ props.user.photos.small ? props.user.photos.small : avatar} className={styles.avatar} alt="avatar"/>
                </NavLink>
                    {props.user.followed
                        ?  <button disabled={props.isFollowUser.some(id => id === props.user.id)}
                                   className={styles.subscription}
                                   onClick={() => {props.unfollow(props.user.id)} }>Unfollow</button>
                        :  <button disabled={props.isFollowUser.some(id => id === props.user.id)}
                                   className={styles.subscription}
                                   onClick={() => {props.follow(props.user.id)} }>Follow</button>}
            </div>
            <div className={styles.userInfo}>
                <NavLink className={styles.userProfileLink} to={`/profile/${props.user.id}`}>
                    <div className={styles.name}>
                        <span>{props.user.name}</span>
                    </div>
                </NavLink>
                <div >
                    <span>Country</span>
                </div>
                <div className={styles.status}>
                    <span>{props.user.status ? props.user.status : `Status don't specified` }</span>
                </div>
                <div>
                    <span>City</span>
                </div>
            </div>
        </div>
    )
};

export default UserItem;
UserItem.propTypes = {
    users: PropTypes.object
};
