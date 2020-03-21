import React from "react";
import avatar from "../../../images/avatar.jpg";
import styles from "./MessageCreate.module.css";
import PropTypes from "prop-types";

const MessageCreate = (props) => {
    let onAddNewMessage = () => {
        props.addNewMessage()
    };

    let onChangeNewMessageText = (event) => {
        let newText = event.target.value;
        props.changeNewMessageText(newText);
    };
    return(
        <div className={styles.messageCreate}>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
            <textarea onChange={onChangeNewMessageText} value={props.newMessageText} className={styles.textarea}/>
            <div className={styles.buttonBlock}>
                <div onClick={onAddNewMessage} className={styles.addPostBtn}>
                    <span>Add Message</span>
                </div>
            </div>
        </div>
    )
};

export default MessageCreate;

MessageCreate.propTypes = {
    newMessageText: PropTypes.string,
    addNewMessage: PropTypes.func,
    changeNewMessageText: PropTypes.func,
};

MessageCreate.defaultProps = {
    newMessageText: 'IT-incubator'
};