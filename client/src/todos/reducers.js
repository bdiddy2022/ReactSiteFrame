import {
    CREATE_TODO,
    MARK_TODO_AS_COMPLETED,
    REMOVE_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

//Reducer: function named after whatever resource its in charge of managing
//Reducers take the current state as well as a triggered action, then updates the state based on the result of the triggered action

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo),
            };
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;

            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id)
            };
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: todoToMarkCompleted } = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === todoToMarkCompleted.id) {
                        return { ...todo, isCompleted: true };
                    }
                    return todo;
                }),
            };
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state, 
                isLoading: false, 
                data: todos,
            };
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true,
            };

        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state, 
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
}