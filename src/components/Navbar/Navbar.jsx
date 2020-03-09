import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.navBar}>
          <div className={styles.navItem}>
              <NavLink to="/home" activeClassName={styles.activeLink}>Home</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
          </div>
          <div className={styles.navItem}>
              <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
          </div>
      </nav>
  )
};

export default Navbar;