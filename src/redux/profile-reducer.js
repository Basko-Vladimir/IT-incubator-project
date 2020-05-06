import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'social-network/profile/ADD_NEW_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCount: 12, commentCount: 2 },
        {id: 1, message: 'Yo Yo', likeCount: 16, commentCount: 11},
        {id: 2, message: 'Today is nice day', likeCount: 7, commentCount: 6}],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCounts: 4,
                commentCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state
    }
};

export const addNewPostAC = (newPostText) => ({type: ADD_NEW_POST, newPostText});
const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status});

export const setUserProfile = (userId) => async (dispatch) => {
    const data = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(data));
};

export const setUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatusAC(data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const data = profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }
};

export default profileReducer;