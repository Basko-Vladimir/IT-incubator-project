import {authAPI} from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';
const EXIT_FROM_PROFILE = 'EXIT_FROM_PROFILE';

let initialState = {
    userData:{
        userId:null,
        email:null,
        login:null,
        isAuth: false
    }

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return{
                ...state,
                userData: {...state.userData, ...action.userData}
            };
        case EXIT_FROM_PROFILE:
            return {
                ...state,
                isAuth: false
            };
        default: return state;
    }
};

const setAuthUserAC = (userId, email, login, isAuth) => ({type:SET_AUTH_USER, userData:{userId, email, login, isAuth}});

export const exitFromProfile = () => ({type:EXIT_FROM_PROFILE});

export const setAuthUser = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                let {id, login, email} = data.data;
                if (data.resultCode === 0) {
                    dispatch(setAuthUserAC(id, email, login, true));
                }
            })
    }
};

export const login = (email, password, rememberMe) => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUser());
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then( data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserAC(null, null, null, false))
                }
            })
    }
};

export default authReducer;