import React from "react";
import styles from "./Header.module.css";
import earth from "../../images/earthWhite.png";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.logoIcon}>
                <img src={earth} alt="icon"/>
            </div>
            <div className={styles.logoText}>
                <h1>Social Network</h1>
            </div>
            <div className={styles.language}>
                <span>Русский</span>
                <span>English</span>
                <span>French</span>
                <span>Spanish</span>
            </div>
            <div className={styles.exit}>
                <span onClick={props.logout}>Exit</span>
            </div>
        </div>
    )
};

export default connect(null, {logout})(Header);