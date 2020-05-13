import React from "react";
import styles from "./Post.module.css";
import like from "../../../../images/like.png";
import comment from "../../../../images/comment.png";
import PropTypes from "prop-types";
import Avatar from "../../../common/Avatar/Avatar";



const Post = (props) => {
    return(
        <div className={styles.postBlock}>
            <div className={styles.postHeader}>
                <div className={styles.avatar}>
                    <Avatar userPhoto={props.userPhoto}/>
                </div>
                <div className={styles.name}>
                    <span>Иван Иванов</span>
                </div>
                <div className={styles.time}>
                    <span>5 min ago</span>
                </div>
            </div>
            <div className={styles.postMessage}>
                {props.message}
            </div>
            <div className={styles.postReview}>
                <div className={styles.like}>
                    <img src={like} alt="like"/>
                    <span>{props.likes}</span>
                </div>
                <div className={styles.comment}>
                    <img src={comment}  alt="comment"/>
                    <span>{props.comments}</span>
                </div>
            </div>
        </div>
    )
};

export default Post;

Post.propTypes = {
    message: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number
};

Post.defaultProps = {
    message: 'Empty text message!!!',
    likes: 0,
    comments:0
};

