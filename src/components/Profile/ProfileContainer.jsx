import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import *as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then( response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {

        return (
            <Profile profile={this.props.profile} />
        )
    }
}

let WithUrlContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);