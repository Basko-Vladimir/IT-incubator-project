const ADD_NEW_MESSAGE = 'social-network/dialogs/ADD_NEW_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Elena'},
        {id: 3, name: 'Georgii'},
        {id: 4, name: 'Regina'},
        {id: 5, name: 'Svetlana'},
        {id: 6, name: 'Oleg'}],
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'I like React'},
        {id: 3, message: 'Thanks, I\'m fine'},
        {id: 4, message: 'Vladimir'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 7,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [newMessage, ...state.messages],
            };
        default:
            return state
    }
};

export const addNewMessageAC = (newMessageText) => ({type: ADD_NEW_MESSAGE, newMessageText});

export default dialogsReducer;