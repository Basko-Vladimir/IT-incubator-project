import React from "react";
import styles from "./InfoItem.module.css";
import PropTypes from "prop-types";

const InfoItem = (props) => {
    return(
        <div className={styles.contentBlock}>
            <span className={styles.header}>{props.header}</span>
            <span className={styles.content}>{props.content}</span>
        </div>
    )
};

export default InfoItem;

InfoItem.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string
};

InfoItem.defaultProps = {
    header: 'Header',
    content: 'Content'
};