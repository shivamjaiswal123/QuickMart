import React from 'react'
import { Navigate } from 'react-router'
import { AuthState } from '../context/AuthProvider'

function ProtectedRoute({children}) {
    const {isAuthenticated} = AuthState()
    
    return (
        <div>
            { isAuthenticated ? children : <Navigate to="/signin"/>}
        </div>
    )
}

export default ProtectedRoute
