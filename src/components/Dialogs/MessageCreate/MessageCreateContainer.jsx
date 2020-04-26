import MessageCreate from "./MessageCreate";
import {connect} from "react-redux";
import {addNewMessageAC} from "../../../redux/dialogs-reducer";

let mapDispatchToProps= (dispatch) => {
    return {
        addNewMessage: (newMessageText) => {
            dispatch(addNewMessageAC(newMessageText));
        }
    }
};

const MessageCreateContainer = connect( null, mapDispatchToProps)(MessageCreate);

export default MessageCreateContainer;