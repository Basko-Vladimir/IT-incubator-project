import React from "react";
import styles from "./Interlocutor.module.css";
import avatar from "../../../images/avatar.jpg";

const Interlocutor = () => {
  return (
      <div className={styles.interlocutor}>
          <img className={styles.avatar} src={avatar} alt="avatar"/>
          <div className={styles.content}>
              <span className={styles.name}>Иванов Иван</span>
              <span className={styles.status}>Online</span>
          </div>
      </div>
  )
};

export default Interlocutor;