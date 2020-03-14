import React from "react";
import styles from "./ProfileInfo.module.css";
import Info from "./Info/Info";

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.name}>
                <span>Иванов Иван</span>
            </div>
            <Info content={'Lorem ipsum dolor sit amet, consectetur'}
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