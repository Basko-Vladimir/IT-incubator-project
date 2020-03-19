const ADD_NEW_POST = 'ADD_NEW_POST';



let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCounts: 12},
        {id: 1, message: 'Yo Yo', likeCounts: 16},
        {id: 2, message: 'Today is nice day', likeCounts: 7}],
    newPostText: 'Abracadabra'
};

const profileReducer = (state = initialState, action) => {
   return state;
};

export const addNewPostAC = (newPostText) => ({type: ADD_NEW_POST, newPostText});

export default profileReducer;