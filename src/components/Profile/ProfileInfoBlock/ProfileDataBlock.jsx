import React, {useState} from "react";
import styles from "./ProfileDataBlock.module.css";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";



const ProfileDataBlock = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {           // так делать не совсем правильно, т.к. должны задиспатчить и забыть
                setEditMode(false)  // а не ждать промис, правильнее хранить какой-то флаг в редьюсере и менять
            });                     // локальный стейт при изменении значения этого флага Flux круговорот
    };

    return (
        <div  className={styles.profileInfoBlock}>
            { editMode
                ? <ProfileDataReduxForm onSubmit={onSubmit}
                                        initialValues={props.profile}
                                        profile={props.profile} />
                : <ProfileData {...props} setEditMode={setEditMode} /> }
        </div>
    )
};

export default ProfileDataBlock;



