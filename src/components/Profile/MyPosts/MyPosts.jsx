import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostCreateContainer from "./PostCreate/PostCreateContainer";

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post key = {Math.random()*10}
                                           message = {p.message}
                                           likes = {p.likeCounts}
                                           comments = {p.commentCount}/>);

    return (
        <div className={styles.myPosts}>
            <PostCreateContainer/>
            <div className={styles.postWrap}>
                {posts}
            </div>

        </div>
    )
};

export default MyPosts;