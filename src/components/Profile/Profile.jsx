import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../images/avatar.jpg";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.profileWrap}>
            <div className={styles.bgWrap}>
                <div className={styles.bgPhoto}> </div>
                <img className={styles.avatar} src={avatar} alt='avatar'/>
            </div>
            <div className={styles.profileBlock}>
                <MyPosts/>
                <ProfileInfo/>
            </div>
        </div>
    )
};

export default Profile;