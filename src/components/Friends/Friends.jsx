import React from "react";
import styles from "./Friends.module.css";
import FriendsItem from "./InterlocutorItem/FriendsItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Friends = (props) => {
    let interlocutors = props.dialogs.map(d => <FriendsItem key={d.id} name={d.name}/>);
    return (
        <div className={styles.interlocutorsBlock}>
            <div className={styles.interlocutorsHeader}>
                <span>Friends</span>
            </div>
            <div className={styles.interlocutors}>
                {interlocutors}
            </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};
export default connect(mapStateToProps)(Friends);

Friends.propTypes = {
    dialogs: PropTypes.array
};