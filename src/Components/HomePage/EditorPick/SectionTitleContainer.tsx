import React, { ReactNode } from 'react'


interface SectionTitleContainerProps {
    children: ReactNode,
    className?: string
}

function SectionTitleContainer({ children, className = " " }: SectionTitleContainerProps) {
    return (
        <div className={" m-3 text-align-center d-flex flex-column justify-content-center align-items-center gap-2 " + className}>
            {children}
        </div>
    )
}

export default SectionTitleContainer
