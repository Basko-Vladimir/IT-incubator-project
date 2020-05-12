import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../images/avatar.jpg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileInfo/ProfileStatus/ProfileStatusWithHooks";

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
                        <input type={'file'} />
                    </div>
                </div>
                <img className={styles.avatar} src={props.profile.photos.small
                    ? props.profile.photos.small : avatar} alt='avatar'/>
            </div>
            <div className={styles.profileBlock}>
                <MyPostsContainer />
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
};

export default Profile;