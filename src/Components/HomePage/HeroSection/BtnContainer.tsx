import React, { ReactNode } from 'react'

interface BtnContainerProps {
    children: ReactNode,
    className?: string
}

function BtnContainer({ children, className = " gap-4 " }: BtnContainerProps) {
    return (
        <div className={'d-flex flex-wrap align-items-center justify-content-center ' + className}>
            {children}
        </div>
    )
}

export default BtnContainer
