import React from "react";
import styles from "../Login.module.css";
import avatar from "../../../images/avatar.jpg";
const LoginAuth = (props) => {
    return (
        <div className={styles.login}>
            <div className={styles.loginAuth}>
                <img src={avatar} alt="avatar"/>
                <div className={styles.header}>Hi {props.userData.login}, you authorised</div>
                <input type='button' value='Edit Profile' className={styles.editProfile}/>
                <div onClick={props.exitFromProfile} className={styles.exit}>Выйти</div>
            </div>
        </div>
    )
};

export default LoginAuth;