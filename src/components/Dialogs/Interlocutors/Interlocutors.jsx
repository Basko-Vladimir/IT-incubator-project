import React from "react";
import styles from "./Interlocutors.module.css";
import InterlocutorItem from "./InterlocutorItem/InterlocutorItem";
import PropTypes from "prop-types";

const Interlocutors = (props) => {
    let interlocutors = props.dialogs.map(d => <InterlocutorItem key={d.id} name={d.name}/>);

    return (
        <div className={styles.interlocutorsBlock}>
            <div className={styles.interlocutorsHeader}>
                <span>Interlocutors</span>
            </div>
            <div className={styles.interlocutors}>
                {interlocutors}
            </div>
        </div>
    )
};

export default Interlocutors;

Interlocutors.propTypes = {
    dialogs: PropTypes.array
};