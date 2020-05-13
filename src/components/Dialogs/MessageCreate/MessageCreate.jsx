import React from "react";
import styles from "./MessageCreate.module.css";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import Button from "../../common/Button/Button";
import {maxLengthCreator, required} from "../../../utilities/validators";
import {FormElement} from "../../common/FormControl/FormControl";
import {connect} from "react-redux";
import {addNewMessage} from "../../../redux/dialogs-reducer";
import Avatar from "../../common/Avatar/Avatar";

const MessageCreate = (props) => {
    let addNewMessage = (value) => {
        props.addNewMessage(value.newMessageText);
    };
    return (
        <div className={styles.messageCreate}>
            <div className={styles.avatar}>
                <Avatar/>
            </div>
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

export default connect(null, {addNewMessage})(MessageCreate);

MessageCreate.propTypes = {
    newMessageText: PropTypes.string,
    addNewMessage: PropTypes.func,
    changeNewMessageText: PropTypes.func,
};

MessageCreate.defaultProps = {
    newMessageText: 'IT-incubator'
};