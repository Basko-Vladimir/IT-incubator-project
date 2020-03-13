import React from "react";
import styles from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={styles.navItem}>
            <img src={props.icon} alt="homeIcon" className={styles.icon}/>
            <NavLink to={`${props.link.toLowerCase()[0]}${props.link.slice(1)}`}
                     activeClassName={styles.activeLink}
                     className={styles.link}>{props.link}</NavLink>
        </div>
    )
};

export default NavbarItem;