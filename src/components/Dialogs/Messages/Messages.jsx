import React from "react";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import PropTypes from "prop-types";

const Messages = (props) => {
    let messages = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>);
    return (
        <div className={styles.messages}>
            {messages}
        </div>
    )
};

export default Messages;

Messages.propTypes = {
    messages: PropTypes.array
};