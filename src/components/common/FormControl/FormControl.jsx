import React from "react";
import styles from "./FormControl.module.css";

export const Textarea = ({input, meta, ...rest}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <textarea {...input} {...rest} className={ `${styles.textarea} ${hasError && styles.error}` }> </textarea>
            {hasError && <span className={styles.errorText}>{meta.error}</span>}
        </div>
    )
};