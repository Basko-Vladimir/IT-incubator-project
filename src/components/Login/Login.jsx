import React from "react";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <form>
                <span>Authorization</span>
                <input type='text' />
                <input type='text' />
                <input type='submit'/>
            </form>
        </div>
    )
};

export default Login;