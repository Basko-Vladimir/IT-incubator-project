import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostCreate from "./PostCreate/PostCreate";
import PostCreateContainer from "./PostCreate/PostCreateContainer";

const MyPosts = () => {
    return(
        <div className={styles.myPosts}>
            {/*<PostCreate btnValue={'Add Post'}/>*/}
            <PostCreateContainer/>
            <Post/>
            <Post/>
        </div>
    )
};

export default MyPosts;