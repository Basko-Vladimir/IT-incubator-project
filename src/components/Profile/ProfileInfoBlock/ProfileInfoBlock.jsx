import React, {useState} from "react";
import styles from "./ProfileInfoBlock.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoReduxForm from "./ProfileInfoForm/ProfileInfoForm";


const ProfileInfoBlock = (props) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div  className={styles.profileInfoBlock}>
            { editMode ? <ProfileInfoReduxForm/> : <ProfileInfo {...props} setEditMode={setEditMode} /> }
        </div>
    )
};

export default ProfileInfoBlock;



