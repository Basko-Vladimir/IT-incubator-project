import React, {useState} from "react";
import styles from "./ProfileDataBlock.module.css";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";



const ProfileDataBlock = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        setEditMode(false);
        props.saveProfile(formData);
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



