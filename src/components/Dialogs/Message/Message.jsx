import React from "react";
import styles from "./Message.module.css";
import avatar from "../../../images/avatar.jpg";

const Message = () => {
    return(
        <div className={styles.messageBlock}>
            <img className={styles.avatar} src={avatar} alt="avatar"/>
            <div className={styles.message}>
                <div className={styles.messageHeader}>
                    <span className={styles.name}>Name</span>
                    <span className={styles.time}>time</span>
                </div>
                <div className={styles.messageContent}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Animi autem delectus esse
                        ipsum, labore omnis?
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Message;