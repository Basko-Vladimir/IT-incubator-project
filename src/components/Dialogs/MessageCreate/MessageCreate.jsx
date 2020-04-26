import React from "react";
import avatar from "../../../images/avatar.jpg";
import styles from "./MessageCreate.module.css";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";

const MessageCreate = (props) => {

    let addNewMessage = (value) => {
        props.addNewMessage(value.newMessageText);
    };

    return (
        <div className={styles.messageCreate}>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
            <MessageCreateFormRedux onSubmit={addNewMessage} />
        </div>
    )
};

const MessageCreateForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageText'} component={'textarea'} className={styles.textarea}/>
            <div className={styles.buttonBlock}>
                <button className={styles.addPostBtn}>Add Message</button>
            </div>
        </form>
    )
};

const MessageCreateFormRedux = reduxForm({form:'MessageCreateForm'})(MessageCreateForm);

export default MessageCreate;

MessageCreate.propTypes = {
    newMessageText: PropTypes.string,
    addNewMessage: PropTypes.func,
    changeNewMessageText: PropTypes.func,
};

MessageCreate.defaultProps = {
    newMessageText: 'IT-incubator'
};