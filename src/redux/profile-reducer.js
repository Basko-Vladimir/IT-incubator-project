const ADD_NEW_POST = 'ADD_NEW_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT';


let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likeCounts: 12},
        {id: 1, message: 'Yo Yo', likeCounts: 16},
        {id: 2, message: 'Today is nice day', likeCounts: 7}],
    newPostText: 'IT-incubator'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.newPostText, likeCounts: 4}],
                newPostText: ''
            };

        case NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state
    }

};

export const addNewPostAC = () => ({type: ADD_NEW_POST});
export const changeNewPostTextAC = (newText) => ({type: NEW_POST_TEXT, newText});

export default profileReducer;