import React from "react";
import styles from "./Dialogs.module.css";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Messages from "./Messages/Messages";
import MessageCreate from "./MessageCreate/MessageCreate";

const Dialogs = () => {
    return (
        <div className={styles.dialogsWrap}>
            <div className={styles.dialogsBlock}>
                <Messages/>
            </div>
            <MessageCreate/>
        </div>
    )
};

export default compose(withAuthRedirect)(Dialogs);
