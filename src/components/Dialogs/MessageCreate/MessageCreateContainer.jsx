import React from "react";
import MessageCreate from "./MessageCreate";
import {connect} from "react-redux";
import {addNewMessageAC, changeNewMessageTextAC} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps= (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageAC());
        },
        changeNewMessageText: (newText) => {
            dispatch(changeNewMessageTextAC(newText))
        }
    }
};


const MessageCreateContainer = connect(mapStateToProps, mapDispatchToProps)(MessageCreate);

export default MessageCreateContainer;