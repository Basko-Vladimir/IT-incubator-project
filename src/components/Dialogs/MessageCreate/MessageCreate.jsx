import React from "react";
import avatar from "../../../images/avatar.jpg";
import styles from "./MessageCreate.module.css";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import Button from "../../common/Button/Button";
import {maxLengthCreator, required} from "../../../utilities/validators";
import {FormElement} from "../../common/FormControl/FormControl";

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

const maxLength = maxLengthCreator(10);

const MessageCreateForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field name={'newMessageText'}
                   component={FormElement}
                   type={'textarea'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLength]} />
            <div className={styles.buttonBlock}>
                <Button name={'Add message'}/>
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