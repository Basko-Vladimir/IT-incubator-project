import React from "react";
import styles from "./PostCreate.module.css";
import {Field, reduxForm} from "redux-form";
import Button from "../../../common/Button/Button";
import {maxLengthCreator, required} from "../../../../utilities/validators";
import {FormElement} from "../../../common/FormControl/FormControl";
import {connect} from "react-redux";
import {addNewPost} from "../../../../redux/profile-reducer";
import Avatar from "../../../common/Avatar/Avatar";

const PostCreate = (props) => {
    let onAddNewPost = (value) => {
        props.addNewPost(value.newPostText);
    };

    return(
        <div className={styles.postCreate}>
            <div className={styles.avatar}>
                <Avatar userPhoto={props.userPhoto}/>
            </div>
            <PostCreateFormRedux onSubmit={onAddNewPost} />
        </div>
    )
};

const maxLength = maxLengthCreator(10);

const PostCreateForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field name={'newPostText'}
                   type={'textarea'}
                   validate={[required, maxLength]}
                   component={FormElement} />
            <div className={styles.buttonBlock}>
                <Button name={'Add Post'}/>
            </div>
        </form>
    )
};

const PostCreateFormRedux = reduxForm({form: 'PostCreateForm'})(PostCreateForm);

export default connect(null, {addNewPost})(PostCreate);
