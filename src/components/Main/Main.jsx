import React from "react";
import styles from "./Main.module.css";
import PhotoBG from "./PhotoBG/PhotoBG";

const Main = () => {
  return (
      <div className={styles.main}>
          <PhotoBG />
          <div className={styles.contentBlock}>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.contentItem}>Lorem ipsum dolor sit amet.</div>
          </div>
      </div>
  )
};

export default Main;