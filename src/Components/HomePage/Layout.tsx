import React, { ReactNode } from 'react'

interface LayoutProps {
    className?: string,
    children: ReactNode
}

function Layout({ className = " ", children }: LayoutProps) {
    return (
        <div className={className + " mt-5 container d-flex flex-column gap-4 align-items-center justify-content-center "}>
            {children}
        </div>
    )
}

export default Layout
