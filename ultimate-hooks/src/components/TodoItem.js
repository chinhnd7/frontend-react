import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'
import { DELETE_TODO } from '../reducers/types'

// destructuring from props
const TodoItem = ({ todo }) => {

    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    const style = isLightTheme ? light : dark

    const { dispatch } = useContext(TodoContext)

    return (
        <div>
            <li onClick={() => {
                dispatch({
                    type: DELETE_TODO,
                    payload: { id: todo.id }
                })
            }}
                style={style}>{todo.title}
            </li>
        </div>
    )
}

export default TodoItem