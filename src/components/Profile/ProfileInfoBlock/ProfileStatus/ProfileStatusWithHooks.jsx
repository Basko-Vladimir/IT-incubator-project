import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    };

    const activatedEditMode = () => {
        setEditMode(true);
    };

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    return (
        <div>{!editMode
            ? <div>
                <span onDoubleClick={activatedEditMode}>{props.status || `Status don't entered`}</span>
            </div>
            : <div>
                <input onBlur={deactivatedEditMode}
                       onChange={changeStatus}
                       autoFocus={true}
                       value={status} />
            </div>
        }
        </div>
    )
};

export default ProfileStatusWithHooks;