import {createSelector} from "reselect";

const getUsersSimpleSelector = (state) => state.usersPage.users;
export const getUsers = createSelector(getUsersSimpleSelector, (users) => users.filter( () => true) );
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getTotalCount = (state) => state.usersPage.totalCount;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getIsFollowUser = (state) => state.usersPage.isFollowUser;

