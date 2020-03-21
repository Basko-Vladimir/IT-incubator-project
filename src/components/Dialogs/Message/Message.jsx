import React from "react";
import styles from "./Message.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";

const Message = (props) => {
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

export default Message;

Message.propTypes= {
    message: PropTypes.string
};

Message.propTypes = {
    message: 'Empty message text!!!'
};