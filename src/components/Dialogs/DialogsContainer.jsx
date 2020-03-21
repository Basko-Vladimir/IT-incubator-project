import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;