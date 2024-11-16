import React from 'react'
import Navigation from '../component/Navigation'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <div className="bg-gray-100">
            <Navigation/>
            <Outlet/>
        </div>
    )
}

export default RootLayout
