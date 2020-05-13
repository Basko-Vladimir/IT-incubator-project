import React from "react";
import styles from "./MessageItem.module.css";
import PropTypes from "prop-types";
import Avatar from "../../../common/Avatar/Avatar";

const MessageItem = (props) => {
    return(
        <div className={styles.messageBlock}>
            <div className={styles.avatar}>
                <Avatar/>
            </div>
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

MessageItem.propTypes = {
    message: PropTypes.string
};