import PostCreate from "./PostCreate";
import {connect} from "react-redux";
import {addNewPostAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const PostCreateContainer = connect(mapStateToProps, {addNewPostAC})(PostCreate);

export default PostCreateContainer;