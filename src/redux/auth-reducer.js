const SET_AUTH_USER = 'SET_AUTH_USER';
const EXIT_FROM_PROFILE = 'EXIT_FROM_PROFILE';

let initialState = {
    userData:{
        userId:null,
        email:null,
        login:null
    },
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return{
                ...state,
                userData: {...state.userData, ...action.userData},
                isAuth: true
            };
        case EXIT_FROM_PROFILE:
            return {
                ...state,
                isAuth: false
            };
        default: return state;
    }
};

export const setAuthUser = (userId, email, login) => ({type:SET_AUTH_USER, userData:{userId, email, login}});
export const exitFromProfile = () => ({type:EXIT_FROM_PROFILE});
export default authReducer;