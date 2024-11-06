import React, { ReactNode } from 'react'

interface SectionDescriptionProps {
    children: ReactNode,
    className?: string,
    fontColor?: string
}

function SectionDescription({ children, className = " ", fontColor = " " }: SectionDescriptionProps) {
    return (
        <div className={`description opacity-06 fs-7 fw-600 ${fontColor} ${className}`}>{children}</div>
    )
}

export default SectionDescription
