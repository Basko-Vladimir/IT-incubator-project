import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave} from '@fortawesome/free-solid-svg-icons'
import handleSubmit from "redux-form/lib/handleSubmit";
import {reduxForm} from "redux-form";



const ProfileInfoForm = (props) => {
    return (
        <form onSubmit={handleSubmit}>
            <div onClick={() => props.setEditMode(true)}>
                <FontAwesomeIcon icon={faSave} /> Save
            </div>}
            {/*<InfoItem header={"About Me"} content={props.profile.aboutMe ? props.profile.aboutMe: 'Nothing entered'}/>*/}
            {/*<InfoItem header={"Looking for a job"} content={props.profile.lookingForAJob ? 'Yes' : 'No'}/>*/}
            {/*{*/}
            {/*    props.profile.lookingForAJob && <InfoItem header={"My professional skills"}*/}
            {/*                                              content={props.profile.lookingForAJobDescription}/>*/}
            {/*}*/}
            {/*<InfoItem header={"Contacts:"}*/}
            {/*          content={Object.keys(props.profile.contacts).map(key => {*/}
            {/*              return <Contact key={key} title={key} value={props.profile.contacts[key]}/>*/}
            {/*          })}/>*/}
        </form>
    )
};

const ProfileInfoReduxForm = reduxForm({form:'edit-profile'})(ProfileInfoForm);

export default ProfileInfoReduxForm;



