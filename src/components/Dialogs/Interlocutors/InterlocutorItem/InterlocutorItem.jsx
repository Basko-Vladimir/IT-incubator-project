import React from "react";
import styles from "./InterlocutorItem.module.css";
import avatar from "../../../../images/avatar.jpg";
import PropTypes from "prop-types";

const InterlocutorItem = (props) => {
  return (
      <div className={styles.interlocutor}>
          <img className={styles.avatar} src={avatar} alt="avatar"/>
          <div className={styles.content}>
              <span className={styles.name}>{props.name}</span>
              <span className={styles.status}>Online</span>
          </div>
      </div>
  )
};

export default InterlocutorItem;

InterlocutorItem.propTypes = {
    name: PropTypes.string
};

InterlocutorItem.defaultProps = {
    name: 'Иван Иванов'
};