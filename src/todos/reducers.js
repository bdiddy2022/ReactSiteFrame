import { CREATE_TODO, REMOVE_TODO } from './actions'

//Reducer: function named after whatever resource its in charge of managing
//Reducers take the current state as well as a triggered action, then updates the state based on the result of the triggered action

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, 
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;

            return state.filter(todo=> todo.text !== text);
        }
        default: {
            return state;
        }
    }
}