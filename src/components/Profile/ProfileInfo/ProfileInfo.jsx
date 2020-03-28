import React from "react";
import styles from "./ProfileInfo.module.css";
import Info from "./Info/Info";


const ProfileInfo = (props) => {

    return (
        <div className={styles.profileInfo}>
            <div className={styles.name}>
                <span>{props.profile.fullName}</span>
            </div>
            <Info content={props.profile.aboutMe ? props.profile.aboutMe : 'Lorem ipsum dolor sit amet, consectetur'}
                  header={"About Me"}/>
            <Info content={'15 июня 1990'} header={"Birthday"}/>
            <Info content={'Belarus'} header={"Country"}/>
            <Info content={'Minsk'} header={"City"}/>
            <Info content={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
                  header={"My hobby"}/>
        </div>
    )
};

export default ProfileInfo;