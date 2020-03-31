import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const UserItem = (props) => {

    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <NavLink className={styles.userProfileLink} to={`/profile/${props.user.id}`}>
                    <img src={ props.user.photos.small ? props.user.photos.small : avatar} className={styles.avatar} alt="avatar"/>
                </NavLink>
                    {props.user.followed
                        ?  <div onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                                withCredentials: true, headers: {'API-KEY':'c2812a99-b1c5-4f1a-b023-99177b7645a3'}})
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.unfollow(props.user.id)
                                    }
                                });
                        }} className={styles.subscription}>Unfollow</div>
                        :  <div onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {} , {
                                withCredentials: true, headers: {'API-KEY':'c2812a99-b1c5-4f1a-b023-99177b7645a3'}})
                                .then(response => {
                                    if (response.data.resultCode === 0){
                                        props.follow(props.user.id)
                                    }
                                });
                        }} className={styles.subscription}>Follow</div> }
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
