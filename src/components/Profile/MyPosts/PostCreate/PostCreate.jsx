import React from "react";
import styles from "./PostCreate.module.css";
import avatar from "../../../../images/avatar.jpg";

const PostCreate = (props) => {
    let onAddNewPost = () => {
        props.addNewPost();
    };

    let onChangeNewPostText = (event) => {
        let newText = event.target.value;
        props.changeNewPostText(newText);
    };

    return(
        <div className={styles.postCreate}>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
            <textarea  onChange={onChangeNewPostText} value={props.profilePage.newPostText} className={styles.textarea}/>
            <div className={styles.buttonBlock}>
                <div onClick={onAddNewPost} className={styles.addPostBtn}>
                    <span>Add Post</span>
                </div>
            </div>
        </div>
    )
};

export default PostCreate;