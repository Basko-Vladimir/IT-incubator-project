import React from "react";
import styles from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Messages = (props) => {
    let messages = props.messages.map(m => <MessageItem key={m.id} message={m.message}/>);
    return (
        <div className={styles.messages}>
            {messages}
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        userPhoto: state.profilePage.profile.photos.small
    }
};

export default connect(mapStateToProps)(Messages);

Messages.propTypes = {
    messages: PropTypes.array
};