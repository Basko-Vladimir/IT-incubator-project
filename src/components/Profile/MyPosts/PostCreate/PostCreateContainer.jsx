import PostCreate from "./PostCreate";
import {connect} from "react-redux";
import {addNewPostAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addNewPostAC(newPostText));
        }
    }
};

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate);

export default PostCreateContainer;