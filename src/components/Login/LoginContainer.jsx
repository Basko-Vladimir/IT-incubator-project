import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {exitFromProfile, setAuthUser} from "../../redux/auth-reducer";
import * as axios from "axios";
import LoginAuth from "./LoginAuth/LoginAuth";

class LoginContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true})
            .then(response => {
                let {id, login, email} = response.data.data;
                if (response.data.resultCode === 0) {
                    this.props.setAuthUser(id, email, login);
                }
            })
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