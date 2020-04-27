import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import avatar from "../../../images/avatar.jpg";
import Button from "../../common/Button/Button";

const LoginAuth = (props) => {
    return (
        <div className={styles.loginAuth}>
            <img src={avatar} alt="avatar"/>
            <div className={styles.header}>Hi {props.userData.login}, you authorised</div>
            <div>
                <Button name={'Edit profile'}/>
            </div>
            <div onClick={props.logout} className={styles.exit}>Exit</div>
        </div>
    )
};

export default LoginAuth;