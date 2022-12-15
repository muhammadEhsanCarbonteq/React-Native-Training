import React from 'react'
import AppNavigation from './AppNavigation'
import AuthNavigation from './AuthNavigation'

function index({ authorized, authorization }) {
    return (
        <>
            {
                authorized ?
                    <AppNavigation /> :
                    <AuthNavigation authorization={authorization} />
            }
        </>
    )
}

export default index