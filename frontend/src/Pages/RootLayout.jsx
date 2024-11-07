import React from 'react'
import Navigation from '../component/Navigation'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    )
}

export default RootLayout
