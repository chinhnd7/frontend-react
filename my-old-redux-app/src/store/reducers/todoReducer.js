import { ADD_TODO, MARK_COMPLETE, GET_TODOS, DELETE_TODO } from '../types'

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }

        case MARK_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload)
                        todo.completed = !todo.completed
                    return todo
                })
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        default:
            console.log('default')
            return state
    }
}

export default todoReducer