import React from "react";
import styles from "./Header.module.css";
import earth from "../../images/earth.png";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoIcon}>
                <img src={earth} alt="icon"/>
            </div>
            <div className={styles.logoText}>
                <h1>SocNet</h1>
            </div>
            <div className={styles.language}>
                <span>Русский</span>
                <span>English</span>
                <span>French</span>
                <span>Spanish</span>
            </div>
        </div>
    )
};

export default Header;