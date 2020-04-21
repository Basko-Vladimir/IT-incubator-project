import React from "react";
import styles from "./LoginForm.module.css";
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <Field type='text' className={styles.inputs} component={'input'} name={'email'} placeholder='E-mail'/>
            <Field type='password' className={styles.inputs} component={'input'} name={'password'} placeholder='Password'/>
            <label className={styles.rememberMe}>
                <Field type='checkbox'  placeholder='Password' name={'rememberMe'} component={'input'}/> Remember me
            </label>
            <input type='submit' value='Enter' className={styles.submitBtn}/>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(Form);

const LoginForm = () => {
    const onSubmit = (data) => {
          console.log(data);
    };

    return (
        <>
            <h3 className={styles.header}>Authorization</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
};

export default LoginForm;