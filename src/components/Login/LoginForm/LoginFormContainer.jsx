import React from "react";
import styles from "./LoginForm.module.css";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../../redux/auth-reducer";
import LoginAuth from "../LoginAuth/LoginAuth";

class LoginFormContainer extends React.Component {
    render() {
        let {isAuth, userData, login, logout, captchaURL} = this.props;
        return (
            <div className={styles.loginWrap}>
                {
                    isAuth
                    ? <LoginAuth userData={userData} logout={logout}/>
                    : <LoginForm login={login} captchaURL={captchaURL}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.userData.isAuth
    }
};

export default connect(mapStateToProps, {login, logout})(LoginFormContainer);