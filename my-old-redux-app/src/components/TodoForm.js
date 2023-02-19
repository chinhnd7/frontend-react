import React, { useState } from 'react'
import { addTodo } from '../store/actions/todoActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {

    const [title, setTitle] = useState('')

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault() // tránh mặc định của html là submit thì load trang

        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        addTodo(newTodo)
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    onChange={onTitleChange}
                    placeholder='Enter new title'
                    value={title}
                    required
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { addTodo })(TodoForm)