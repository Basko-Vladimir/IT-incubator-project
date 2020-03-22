import Interlocutors from "./Interlocutors";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

const InterlocutorsContainer = connect(mapStateToProps)(Interlocutors);

export default InterlocutorsContainer;