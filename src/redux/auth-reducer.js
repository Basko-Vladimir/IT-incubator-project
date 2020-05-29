import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'social-network/auth/SET_AUTH_USER';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

let initialState = {
    userData: {
        userId: null,
        email: null,
        login: null,
        isAuth: false,

    },
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                userData: {...state.userData, ...action.userData}
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            };
        default:
            return state;
    }
};

const setAuthUserAC = (userId, email, login, isAuth) => ({type: SET_AUTH_USER,userData: {userId, email, login, isAuth}});
const setCaptchaURL = (captchaURL) => ({type:SET_CAPTCHA_URL, captchaURL});

export const setAuthUser = () => async (dispatch) => {
    const data = await authAPI.authMe();
    let {id, login, email} = data.data;
    if (data.resultCode === 0) {
        dispatch(setAuthUserAC(id, email, login, true));
    }
};

export const getCaptchaURL = () => async (dispatch) => {
     const response = await securityAPI.getCaptchaURL();
     dispatch(setCaptchaURL(response.url));
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(setAuthUser());
    } else {
        if (data.resultCode === 10){
            dispatch(getCaptchaURL())
        }
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