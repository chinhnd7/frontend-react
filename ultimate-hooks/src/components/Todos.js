import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    const { todos } = useContext(TodoContext)

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div className='todo-list'>
            <TodoForm />
            {isAuthenticated ? (
                <ul>
                    {todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} />
                    )
                    )}
                </ul>) : (
                <p style={{ textAlign: 'center' }}>Not authorised </p>
            )
            }

        </div >
    )
}

export default Todos