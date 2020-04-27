import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const Login = (props) => {
    if (props.isAuth){
        console.log(props.isAuth);
        return <Redirect to={'/profile'}/>
    }

    return (
        <h1>LOGIN</h1>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userData.isAuth
    }
};

export default connect(mapStateToProps, null)(Login);