import React from "react";
import styles from "./UsersHeader.module.css";


const UsersHeader = () => {
    return (
        <div className={styles.usersHeader}>
            <div className={styles.sumUsers}>
                <span>All users (0)</span>
            </div>
            <div className={styles.searchUsers}>
                <input type="text" className={styles.textInput} placeholder={'Search...'}/>
                <input type="button" className={styles.textButton} value={'Search'}/>
            </div>
        </div>
    )
};

export default UsersHeader;