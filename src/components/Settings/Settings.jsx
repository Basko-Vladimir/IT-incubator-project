import React from "react";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const Settings = () => {
    return (
        <div>
            Settings
        </div>
    )
};

export default compose(withAuthRedirect)(Settings);