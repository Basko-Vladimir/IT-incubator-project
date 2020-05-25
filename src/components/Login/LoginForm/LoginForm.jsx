import React from "react";
import styles from "./LoginForm.module.css";
import {Field, reduxForm} from "redux-form";
import Button from "../../common/Button/Button";
import {FormElement} from "../../common/FormControl/FormControl";
import {required} from "../../../utilities/validators";


const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <Field type='text'
                   component={FormElement}
                   validate={[required]}
                   name={'email'}
                   placeholder='E-mail'/>
            <Field type='password'
                   component={FormElement}
                   validate={[required]}
                   name={'password'}
                   placeholder='Password'/>
            <label className={styles.rememberMe}>
                <Field type='checkbox'
                       placeholder='Password'
                       name={'rememberMe'}
                       component={'input'}/> Remember me
            </label>
            { props.error && <div className={styles.formError}>{props.error}</div> }
            <div>
                <Button name={'Enter'}/>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(Form);

const LoginForm = (props) => {

    const onSubmit = (data) => {
        let {email, password, rememberMe} = data;
        props.login(email, password, rememberMe);
    };

    return (
        <div className={styles.loginFormWrap}>
            <h3 className={styles.header}>Authorization</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default LoginForm;