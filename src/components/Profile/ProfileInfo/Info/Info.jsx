import React from "react";
import styles from "./Info.module.css";
import PropTypes from "prop-types";

const Info = (props) => {
    return(
        <div className={styles.contentBlock}>
            <span className={styles.header}>{props.header}</span>
            <span className={styles.content}>{props.content}</span>
        </div>
    )
};

export default Info;

Info.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string
};

Info.defaultProps = {
    header: 'Header',
    content: 'Content'
};