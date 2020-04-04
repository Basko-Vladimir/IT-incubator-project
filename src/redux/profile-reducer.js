import {usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCount: 12, commentCount: 2 },
        {id: 1, message: 'Yo Yo', likeCount: 16, commentCount: 11},
        {id: 2, message: 'Today is nice day', likeCount: 7, commentCount: 6}],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounts: 4,
                commentCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };

        case NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            };
        default:
            return state
    }

};

export const addNewPostAC = () => ({type: ADD_NEW_POST});
export const changeNewPostTextAC = (newText) => ({type: NEW_POST_TEXT, newText});
const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            })
    }
};

export default profileReducer;