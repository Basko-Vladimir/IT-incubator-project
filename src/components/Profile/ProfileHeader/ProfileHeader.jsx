import React from "react";
import styles from "./ProfileHeader.module.css";
import ProfileStatusWithHooks from "../ProfileInfoBlock/ProfileStatus/ProfileStatusWithHooks";

const ProfileHeader = (props) => {

    const onSaveNewPhoto = (e) => {
        props.savePhoto(e.currentTarget.files[0])
    };

    return(
        <div className={styles.profileHeader}>
            <div className={styles.status}>
                <ProfileStatusWithHooks status={props.status}
                                        updateUserStatus={props.updateUserStatus}/>
            </div>
            <div className={styles.name}>
                <span>{props.fullName}</span>
            </div>
            {props.isOwner && <input type={'file'}
                                     onChange={onSaveNewPhoto}
                                     className={styles.editProfile}/>}
        </div>
    )
};

export default ProfileHeader;