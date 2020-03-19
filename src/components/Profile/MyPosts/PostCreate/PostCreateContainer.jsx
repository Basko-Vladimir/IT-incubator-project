import React from "react";
import PostCreate from "./PostCreate";
import {connect} from "react-redux";
import {addNewPostAC, changeNewPostTextAC} from "../../../../redux/profile-reducer";



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPostAC());
        },
        changeNewPostText: (newText) => {
            dispatch(changeNewPostTextAC(newText));
        }
    }
};

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;