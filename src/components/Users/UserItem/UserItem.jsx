import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <img src={avatar} className={styles.avatar} alt="avatar"/>
                { props.isFollow
                    ?  <div onClick={() => {props.unfollow(props.user.id)} } className={styles.subscription}>Unfollow</div>
                    :  <div onClick={() => {props.follow(props.user.id)} } className={styles.subscription}>Follow</div> }


            </div>
            <div className={styles.userInfo}>
                <div className={styles.name}>
                    <span>{props.user.name}</span>
                </div>
                <div >
                    <span>{props.user.location.country}</span>
                </div>
                <div>
                    <span>{props.user.status}</span>
                </div>
                <div>
                    <span>{props.user.location.city}</span>
                </div>
            </div>
        </div>
    )
};

export default UserItem;
UserItem.propTypes = {
    users: PropTypes.object
};