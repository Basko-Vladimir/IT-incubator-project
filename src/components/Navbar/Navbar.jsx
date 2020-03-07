import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
      <nav className={styles.navBar}>
          <div className={styles.navItem}>
              <a href="#">Profile</a>
          </div>
          <div className={styles.navItem}>
              <a href="#">News</a>
          </div>
          <div className={styles.navItem}>
              <a href="#">Messages</a>
          </div>
          <div className={styles.navItem}>
              <a href="#">Users</a>
          </div>
          <div className={styles.navItem}>
              <a href="#">Music</a>
          </div>
          <div className={styles.navItem}>
              <a href="#">Settings</a>
          </div>
      </nav>
  )
};

export default Navbar;