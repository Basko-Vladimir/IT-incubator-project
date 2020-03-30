import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../images/avatar.jpg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const  Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
   return (
        <div className={styles.profileWrap}>
            <div className={styles.bgWrap}>
                <div className={styles.bgPhoto}> </div>
                <img className={styles.avatar} src={props.profile.photos.small
                    ? props.profile.photos.small : avatar} alt='avatar'/>
            </div>
            <div className={styles.profileBlock}>
                <MyPostsContainer />
                <ProfileInfo profile={props.profile}/>
            </div>
        </div>
    )
};

export default Profile;