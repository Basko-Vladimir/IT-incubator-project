import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <img src={ props.user.photos.small ? props.user.photos.small : avatar} className={styles.avatar} alt="avatar"/>
                {props.user.followed
                    ?  <div onClick={() => {props.unfollow(props.user.id)} } className={styles.subscription}>Unfollow</div>
                    :  <div onClick={() => {props.follow(props.user.id)} } className={styles.subscription}>Follow</div> }
            </div>
            <div className={styles.userInfo}>
                <div className={styles.name}>
                    <span>{props.user.name}</span>
                </div>
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
