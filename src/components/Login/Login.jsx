import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const Login = (props) => {
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <LoginFormContainer/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userData.isAuth
    }
};

export default connect(mapStateToProps, null)(Login);