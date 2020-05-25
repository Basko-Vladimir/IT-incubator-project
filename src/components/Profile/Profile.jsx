import React from "react";
import styles from "./Profile.module.css";
import ProfileDataBlock from "./ProfileInfoBlock/ProfileDataBlock";
import Preloader from "../common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "../common/Avatar/Avatar";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const  Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.profileWrap}>
            <div className={styles.bgWrap}>
                <div className={styles.bgPhoto}> </div>
                <ProfileHeader status={props.status}
                               isOwner={props.isOwner}
                               updateUserStatus={props.updateUserStatus}
                               savePhoto={props.savePhoto}
                               fullName={props.profile.fullName} />
                <div className={styles.avatar}>
                    <Avatar userPhoto={props.profile.photos.small}/>
                </div>
            </div>
            <div className={styles.profileBlock}>
                <MyPosts userPhoto={props.profile.photos.small} posts={props.posts}/>
                <ProfileDataBlock profile={props.profile} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
            </div>
        </div>
    )
};

export default Profile;