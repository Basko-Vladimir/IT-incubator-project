import React from "react";
import styles from "./FriendsItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";

const FriendsItem = (props) => {
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

export default FriendsItem;

FriendsItem.propTypes = {
    name: PropTypes.string
};

FriendsItem.defaultProps = {
    name: 'Иван Иванов'
};