import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {exitFromProfile, setAuthUser} from "../../redux/auth-reducer";
import LoginAuth from "./LoginAuth/LoginAuth";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUser();
    }
    render() {
        return this.props.isAuth
            ? <LoginAuth userData={this.props.userData} exitFromProfile={this.props.exitFromProfile}/>
            : <Login/>
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {setAuthUser, exitFromProfile})(LoginContainer);