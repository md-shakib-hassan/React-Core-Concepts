import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App'
import Login from '../pages/Login'

export const route = createBrowserRouter([
    {
        path:'/',
        Component: App,
        children:[
            {
                path:"login",
                Component:Login,
            }
        ]
    }
])

