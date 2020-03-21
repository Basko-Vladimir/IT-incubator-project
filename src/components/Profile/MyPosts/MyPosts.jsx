import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostCreateContainer from "./PostCreate/PostCreateContainer";
import PropTypes from "prop-types";

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post key = {p.id}
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

MyPosts.propTypes = {
    posts: PropTypes.array,
};
