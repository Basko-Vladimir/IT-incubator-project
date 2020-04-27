import React from "react";
import styles from "./PostCreate.module.css";
import avatar from "../../../../images/avatar.jpg";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import Button from "../../../common/Button/Button";

const PostCreate = (props) => {
    let userPhoto = props.profilePage.profile.photos.small;

    let AddNewPost = (value) => {
        props.addNewPost(value.newPostText);
    };

    return(
        <div className={styles.postCreate}>
            <img className={styles.avatar} src={userPhoto ? userPhoto : avatar} alt='avatar'/>
            <PostCreateFormRedux onSubmit={AddNewPost} />
        </div>
    )
};

const PostCreateForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <Field name={'newPostText'} component={'textarea'} className={styles.textarea}/>
            <div className={styles.buttonBlock}>
                <Button name={'Add Post'}/>
            </div>
        </form>
    )
};

const PostCreateFormRedux = reduxForm({form: 'PostCreateForm'})(PostCreateForm);

export default PostCreate;

PostCreate.propTypes = {
    newMessageText: PropTypes.string,
    addNewPost: PropTypes.func,
    changeMewPostText: PropTypes.func,
    small: PropTypes.string
};
