import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";

const UserItem = () => {
    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <img src={avatar} className={styles.avatar} alt="avatar"/>
                <div className={styles.subscription}>Follow</div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.name}>
                    <span>Ivanov Ivan</span>
                </div>
                <div className={styles.counrty}>
                    <span>Belarus</span>
                </div>
                <div className={styles.status}>
                    <span>Status</span>
                </div>
                <div className={styles.city}>
                    <span>Minsk</span>
                </div>
            </div>
        </div>
    )
};

export default UserItem;