const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id:1, name:'Dmitry', isFollow: true, status: `I'm a student`, location: {country: 'Belarus', city: 'Minsk'}},
        {id:2, name:'Alex', isFollow: false, status: `I'm a work man`, location: {country: 'Russia', city: 'Moscow'}},
        {id:3, name:'Max', isFollow: true, status: `I'm a boss`, location: {country: 'Ukraine', city: 'Kiev'}},
        {id:4, name:'David', isFollow: false, status: `I like football`, location: {country: 'Latvia', city: 'Riga'}},
        {id:5, name:'Bob', isFollow: false, status: `All good`, location: {country: 'Estonia', city: 'Tallin'}},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, isFollow: false}
                    }
                    return u;
                })
            };
        default: return state;

    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
// export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;