import React from "react";
import styles from "./PostCreate.module.css";
import avatar from "../../../../images/avatar.jpg";

const PostCreate = (props) => {
    return(
        <div className={styles.postCreate}>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
            <textarea defaultValue='IT-incubator' className={styles.textarea}/>
            <div className={styles.buttonBlock}>
                <div className={styles.addPostBtn}>
                    <span>{props.btnValue}</span>
                </div>
            </div>
        </div>
    )
};

export default PostCreate;