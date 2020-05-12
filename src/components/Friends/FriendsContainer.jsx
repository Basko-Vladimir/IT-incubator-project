import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;