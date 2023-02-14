import React, { createContext, useEffect, useReducer } from "react"
import { authReducer } from "../reducers/AuthReducer"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, dispatch] = useReducer(authReducer, false)

    useEffect(() => {
        alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos!')
    }, [isAuthenticated])

    const authContextData = {
        isAuthenticated,
        dispatch
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider