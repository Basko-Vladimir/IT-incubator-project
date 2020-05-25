import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave} from '@fortawesome/free-solid-svg-icons'
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../../../common/FormControl/FormControl";




const ProfileDataForm = ({handleSubmit, profile}) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b>
                <Field name={'fullName'} component={FormElement} type={'text'} placeholder={'Full name'}/>
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field name={'lookingForAJob'} component={FormElement} type={'checkbox'}/>
            </div>
            <div>
                <b>My professional skills:</b>
                <Field name={'lookingForAJobDescription'} component={FormElement} type={'textarea'} placeholder={'My professional skills'}/>
            </div>
            <div>
                <b>About me:</b>
                <Field name={'aboutMe'} component={FormElement} type={'textarea'} placeholder={'About me'}/>
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key}</b>
                            <Field name={'contacts.' + key} component={FormElement} type={'text'}/>
                        </div>
                    )
                })}
            </div>
            <button>
                <FontAwesomeIcon icon={faSave}/> Save
            </button>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;



