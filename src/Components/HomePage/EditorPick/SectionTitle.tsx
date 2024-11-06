import React, { ReactNode } from 'react'

interface SectionTitleProps {
    className?: string,
    children: ReactNode,
    fontSize: string,
    fontColor: string
}

function SectionTitle({ className = "", children, fontSize, fontColor }: SectionTitleProps) {
    return (
        <div className={` sectionTitle ${className} ${fontColor} ${fontSize}`}>{children}</div>
    )
}

export default SectionTitle
