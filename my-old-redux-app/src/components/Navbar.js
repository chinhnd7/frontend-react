import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navbar = ({ totalTodos }) => {
    return (
        <div className='navbar'>
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {totalTodos}</li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    totalTodos: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    totalTodos: state.myTodos.todos.length // state la trang thai cua store, nam trong index.js
})

export default connect(mapStateToProps, {})(Navbar)