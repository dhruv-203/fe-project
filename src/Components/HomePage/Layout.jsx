import React from 'react'

function Layout({ className = " ", children }) {
    return (
        <div className={className + " mt-5 container d-flex flex-column gap-4 align-items-center justify-content-center "}>
            {children}
        </div>
    )
}

export default Layout
