import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserStatus, updateUserStatus,} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('login');  // Не лучший вариант перенаправления (лучший через <Redirect>), но сделали для ознакомления
            }
        }
        debugger
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userData.userId
    }
};

export default compose(connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus}),
                       withRouter)(ProfileContainer);