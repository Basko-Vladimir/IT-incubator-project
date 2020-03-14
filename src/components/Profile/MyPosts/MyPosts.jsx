import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostCreate from "./PostCreate/PostCreate";

const MyPosts = () => {
    return(
        <div className={styles.myPosts}>
            <PostCreate btnValue={'Add Post'}/>
            <Post/>
            <Post/>
        </div>
    )
};

export default MyPosts;