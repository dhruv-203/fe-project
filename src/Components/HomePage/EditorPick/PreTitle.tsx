import React, { ReactNode } from 'react'

interface PreTitleProps {
    className?: string,
    children: ReactNode,
    fontSize?: string,
    fontColor?: string
}

function PreTitle({ className = " ", children, fontSize = "fs-5", fontColor = "text-dark" }: PreTitleProps) {
    return (
        <div className={` preTitle ${fontSize} ${fontColor} ${className}`}>{children}</div>
    )
}

export default PreTitle
