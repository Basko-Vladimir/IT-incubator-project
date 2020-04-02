import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {exitFromProfile, setAuthUser} from "../../redux/auth-reducer";
import LoginAuth from "./LoginAuth/LoginAuth";
import {usersAPI} from "../../API/API";

class LoginContainer extends React.Component {
    componentDidMount() {
        usersAPI.auth()
            .then(data => {
                let {id, login, email} = data.data;
                if (data.resultCode === 0) {
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