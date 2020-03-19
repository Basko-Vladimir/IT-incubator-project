import React from "react";
import styles from "./Dialogs.module.css";
import PostCreate from "../Profile/MyPosts/PostCreate/PostCreate";
import Message from "./Message/Message";
import Interlocutor from "./Interlocutor/Interlocutor";

const Dialogs = () => {
    return (
        <div className={styles.dialogsWrap}>
            <div className={styles.dialogsBlock}>
                <div className={styles.messages}>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className={styles.interlocutorsBlock}>
                    <div className={styles.interlocutorsHeader}>
                        <span>Interlocutors</span>
                    </div>
                    <div className={styles.interlocutors}>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                        <Interlocutor/>
                    </div>

                </div>
            </div>
            <PostCreate btnValue={'New message'}/>

        </div>
    )
};

export default Dialogs;