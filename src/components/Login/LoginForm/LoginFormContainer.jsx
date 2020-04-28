import React from "react";
import styles from "./LoginForm.module.css";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {exitFromProfile, login, logout} from "../../../redux/auth-reducer";
import LoginAuth from "../LoginAuth/LoginAuth";

class LoginFormContainer extends React.Component {
    render() {
        return (
            <div className={styles.loginWrap}>
                {
                    this.props.isAuth
                    ? <LoginAuth userData={this.props.userData} logout={this.props.logout}/>
                    : <LoginForm login={this.props.login}/>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.userData.isAuth
    }
};

export default connect(mapStateToProps, {login, logout, exitFromProfile})(LoginFormContainer);