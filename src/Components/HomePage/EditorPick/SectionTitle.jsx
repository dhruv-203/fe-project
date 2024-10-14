import React from 'react'

function SectionTitle({ className = "", children, fontSize, fontColor }) {
    return (
        <div className={` sectionTitle ${className} ${fontColor} ${fontSize}`}>{children}</div>
    )
}

export default SectionTitle
