import React, { ReactNode } from 'react'
import '../../../utility.css'

interface LogoProps {
    children: ReactNode,
    className?: string
}

function Logo({ children, className = "fs-5 " }: LogoProps) {
    return (
        <div className={"cursor-pointer " + className}>
            {children}
        </div>
    )
}
export default Logo
