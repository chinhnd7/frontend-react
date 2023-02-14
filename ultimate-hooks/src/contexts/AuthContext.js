import React, { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setAuthentication] = useState(false)

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    useEffect(() => {
        alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos!')
    }, [isAuthenticated])

    const authContextData = {
        isAuthenticated,
        toggleAuth
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider