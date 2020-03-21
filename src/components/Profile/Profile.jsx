import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../images/avatar.jpg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const  Profile = () => {
    return (
        <div className={styles.profileWrap}>
            <div className={styles.bgWrap}>
                <div className={styles.bgPhoto}> </div>
                <img className={styles.avatar} src={avatar} alt='avatar'/>
            </div>
            <div className={styles.profileBlock}>
                <MyPostsContainer/>
                <ProfileInfo/>
            </div>
        </div>
    )
};

export default Profile;