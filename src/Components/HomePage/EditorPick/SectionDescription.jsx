import React from 'react'

function SectionDescription({ children, className = "", fontColor }) {
    return (
        <div className={`description opacity-06 fs-7 fw-600 ${fontColor} ${className}`}>{children}</div>
    )
}

export default SectionDescription
