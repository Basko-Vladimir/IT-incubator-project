import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'social-network/auth/SET_AUTH_USER';

let initialState = {
    userData: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                userData: {...state.userData, ...action.userData}
            };
        default:
            return state;
    }
};

const setAuthUserAC = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER,
    userData: {userId, email, login, isAuth}
});

export const setAuthUser = () => async (dispatch) => {
    const data = await authAPI.authMe();
    let {id, login, email} = data.data;
    if (data.resultCode === 0) {
        dispatch(setAuthUserAC(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(setAuthUser());
    } else {
        dispatch(stopSubmit('login', {_error: data.messages[0] || 'Some error'}))
    }

};

export const logout = () => async (dispatch) => {
    debugger
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserAC(null, null, null, false))
    }
};

export default authReducer;