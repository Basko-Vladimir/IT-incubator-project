import React from "react";
import styles from "./FormControl.module.css";

export const FormElement = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            { restProps.type === 'textarea'
                ? <textarea {...input} {...restProps} className={ `${styles.textarea} ${hasError && styles.error}` }/>
                : <input {...input} {...restProps} className={ `${styles.input} ${hasError && styles.error}` }/>
            }
            {hasError && <div className={styles.errorText}>{meta.error}</div>}
        </div>
    )
};
