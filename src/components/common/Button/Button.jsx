import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";


const Button = (props) => {
    return (
        <button className={styles.button}>{props.name}</button>
    )
};

export default Button;

Button.propTypes = {
    name: PropTypes.string
};

Button.defaultProps = {
    name: 'Button name'
};
