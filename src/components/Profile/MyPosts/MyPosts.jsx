import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from "prop-types";
import PostCreate from "./PostCreate/PostCreate";

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post key = {p.id}
                                           message = {p.message}
                                           likes = {p.likeCount}
                                           userPhoto={props.userPhoto}
                                           comments = {p.commentCount}/>);
    return (
        <div className={styles.myPosts}>
            <PostCreate userPhoto={props.userPhoto}/>
            <div className={styles.postWrap}>
                {posts}
            </div>

        </div>
    )
};

export default MyPosts;

MyPosts.propTypes = {
    posts: PropTypes.array
};
