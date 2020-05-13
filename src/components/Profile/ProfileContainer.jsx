import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserStatus, updateUserStatus,} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login');  // Не лучший вариант перенаправления (лучше через <Redirect>), но сделали так для ознакомления
            }
        }
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     posts={this.props.posts}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userData.userId,
        posts: state.profilePage.posts
    }
};

export default compose(connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus}),
                       withRouter,
                       withAuthRedirect)(ProfileContainer);