import React from "react";
import styles from "./Navbar.module.css";
import homeIcon from "../../images/Home.png";
import profileIcon from "../../images/Profile.png";
import newsIcon from "../../images/News.png";
import messageIcon from "../../images/Message.png";
import usersIcon from "../../images/Users.png";
import musicIcon from "../../images/Music.png";
import settingsIcon from "../../images/Settings.png";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = () => {
  return (
      <nav className={styles.navBar}>
          <NavbarItem url='/home' icon={homeIcon} link='Home'/>
          <NavbarItem icon={profileIcon} link='Profile' />
          <NavbarItem icon={newsIcon} link='News' />
          <NavbarItem icon={messageIcon} link='Messages' />
          <NavbarItem icon={usersIcon} link='Users' />
          <NavbarItem icon={musicIcon} link='Music' />
          <NavbarItem icon={settingsIcon} link='Settings' />
      </nav>
  )
};

export default Navbar;