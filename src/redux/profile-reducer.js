import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_NEW_POST = 'social-network/profile/ADD_NEW_POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS';
const SAVE_PHOTO = 'social-network/profile/SAVE_PHOTO';

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
        case SAVE_PHOTO:{
            return{
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
};

export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText});
const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

export const setUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(data));
};

export const setUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatusAC(data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }
};

export const savePhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0){
        dispatch(savePhotoSuccess(data.data.photos))
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const data = await profileAPI.updateProfile(profile);
    if (data.data.resultCode === 0){
        const userId = getState().auth.userData.userId;
        dispatch(setUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.data.messages[0]}))
    }
};

export default profileReducer;