import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import Interlocutor from "./Interlocutor/Interlocutor";
import MessageCreateContainer from "./MessageCreate/MessageCreateContainer";
import PropTypes from "prop-types";


const Dialogs = (props) => {
    let messages = props.messages.map( m => <Message key={m.id}
                                                     message={m.message}/>);
    let interlocutors = props.dialogs.map( d => <Interlocutor key={d.id} name={d.name}/>);

    return (
        <div className={styles.dialogsWrap}>
            <div className={styles.dialogsBlock}>
                <div className={styles.messages}>
                    {messages}
                </div>
                <div className={styles.interlocutorsBlock}>
                    <div className={styles.interlocutorsHeader}>
                        <span>Interlocutors</span>
                    </div>
                    <div className={styles.interlocutors}>
                        {interlocutors}
                    </div>
                </div>
            </div>
            <MessageCreateContainer />
        </div>
    )
};

export default Dialogs;

Dialogs.propTypes = {
    messages: PropTypes.array,
    dialogs: PropTypes.array
};