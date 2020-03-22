import React from "react";
import styles from "./MessageItem.module.css";
import avatar from "../../../../images/avatar.jpg";
import PropTypes from "prop-types";

const MessageItem = (props) => {
    return(
        <div className={styles.messageBlock}>
            <img className={styles.avatar} src={avatar} alt="avatar"/>
            <div className={styles.message}>
                <div className={styles.messageHeader}>
                    <span className={styles.name}>Иванов Иван</span>
                    <span className={styles.time}>time</span>
                </div>
                <div className={styles.messageContent}>
                    <span>{props.message}</span>
                </div>
            </div>
        </div>
    )
};

export default MessageItem;

MessageItem.propTypes= {
    message: PropTypes.string
};

MessageItem.propTypes = {
    message: 'Empty message text!!!'
};