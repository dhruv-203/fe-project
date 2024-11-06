import React, { ReactNode } from 'react'
import '../../../utility.css'

interface LogoContainerProps {
    children: ReactNode,
    className?: string
}

function LogoContainer({ children, className = "" }: LogoContainerProps) {
    return (
        <div className={"d-flex align-items-center justify-content-center " + className}>
            {children}
        </div>
    )
}

export default LogoContainer
