import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "../common/Avatar/Avatar";

const  Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
   return (
        <div className={styles.profileWrap}>
            <div className={styles.bgWrap}>
                <div className={styles.bgPhoto}> </div>
                <div className={styles.headerProfile}>
                    <div className={styles.status}>
                        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>
                    <div className={styles.name}>
                        <span>{props.profile.fullName}</span>
                    </div>
                    <div className={styles.editProfile}>
                        <input type={'file'} className={styles.fileInput}/>
                    </div>
                </div>
                <div className={styles.avatar}>
                    <Avatar userPhoto={props.profile.photos.small}/>
                </div>
            </div>
            <div className={styles.profileBlock}>
                <MyPosts userPhoto={props.profile.photos.small} posts={props.posts}/>
                <ProfileInfo profile={props.profile}/>
            </div>
        </div>
    )
};

export default Profile;