import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <div className={styles.login}>
            <form className={styles.loginForm}>
                <span className={styles.header}>Authorization</span>
                <input type='text' className={styles.inputs} placeholder='E-mail'/>
                <input type='text' className={styles.inputs} placeholder='Password'/>
                <input type='submit' value='Enter' className={styles.submitBtn}/>
            </form>
        </div>
    )
};

export default LoginForm;