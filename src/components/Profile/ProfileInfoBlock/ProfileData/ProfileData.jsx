import React from "react";
import styles from "./ProfileData.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import InfoItem from "./InfoItem/InfoItem";

const ProfileData = (props) => {
    return (
        <div className={styles.profileData}>
            {
                props.isOwner &&
                <div onClick={() => props.setEditMode(true)} className={styles.editWrap}>
                    <FontAwesomeIcon icon={faPen} className={styles.editMode}/> Edit
                </div>
            }
            <InfoItem header={"About Me"} content={props.profile.aboutMe ? props.profile.aboutMe: 'Nothing entered'}/>
            <InfoItem header={"Looking for a job"} content={props.profile.lookingForAJob ? 'Yes' : 'No'}/>
            <InfoItem header={"My professional skills"} content={props.profile.lookingForAJobDescription}/>
            <InfoItem header={"Contacts:"}
                      content={Object.keys(props.profile.contacts).map(key => {
                          return <Contact key={key} title={key} value={props.profile.contacts[key]}/>
                      })}/>
        </div>
    )
};

const Contact = ({title, value}) => {
    return <div className={styles.contact}>
        <b>{title}: </b>{value}
    </div>
};

export default ProfileData;



