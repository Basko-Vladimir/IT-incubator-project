import React from "react";
import styles from "./Dialogs.module.css";
import MessageCreateContainer from "./MessageCreate/MessageCreateContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import InterlocutorsContainer from "./Interlocutors/InterlocutorsContainer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Dialogs = () => {
    return (
        <div className={styles.dialogsWrap}>
            <div className={styles.dialogsBlock}>
                <MessagesContainer/>
                <InterlocutorsContainer/>
            </div>
            <MessageCreateContainer/>
        </div>
    )
};

export default compose(withAuthRedirect)(Dialogs);
