import React from "react";
import styles from "./Avatar.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from 'prop-types';

const Avatar = (props) => {
    return <img className={styles.avatar}
                src={props.userPhoto ? props.userPhoto : avatar} alt='avatar'/>
};

export default Avatar;

Avatar.propTypes = {
    userPhoto: PropTypes.string
};