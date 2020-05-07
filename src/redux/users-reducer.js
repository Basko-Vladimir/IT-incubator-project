import {usersAPI} from "../api/api";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_USER = 'social-network/users/TOGGLE_IS_FOLLOW_USER';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 9,
    totalCount: 200,
    isFetching: false,
    isFollowUser: [6844, 6843]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
               ...state,
               users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOW_USER:
            return {
                ...state,
                isFollowUser: action.isFollowUser
                    ? [...state.isFollowUser, action.userId]
                    : state.isFollowUser.filter( id => id !== action.userId)
            };
        default: return state;
    }
};

const followAC = (userId) => ({type: FOLLOW, userId});
const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const toggleIsFollowUser = (isFollowUser, userId) => ({type: TOGGLE_IS_FOLLOW_USER, isFollowUser, userId});

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const setCurrentPage = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage));
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowUser(true, userId));
    const data = await usersAPI.follow(userId);
    if (data.resultCode === 0) {
        dispatch(followAC(userId));
    }
    dispatch(toggleIsFollowUser(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowUser(true, userId));
    const data = await usersAPI.unfollow(userId);
    if (data.resultCode === 0) {
        dispatch(unfollowAC(userId))
    }
    dispatch(toggleIsFollowUser(false, userId));
};

export default usersReducer;