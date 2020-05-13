import React from "react";
import styles from "./FriendsItem.module.css";
import PropTypes from "prop-types";
import Avatar from "../../common/Avatar/Avatar";

const FriendsItem = (props) => {
  return (
      <div className={styles.interlocutor}>
          <div className={styles.avatar}>
              <Avatar/>
          </div>
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