const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

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
        {id: 6, message: 'Yo'}],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [newMessage, ...state.messages],
                newMessageText: ''
            };
        case NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default: return state
    }
};


export const addNewMessageAC = () => ({type: ADD_NEW_MESSAGE});
export const changeNewMessageTextAC = (newText) => ({type: NEW_MESSAGE_TEXT, newText});

export default dialogsReducer;