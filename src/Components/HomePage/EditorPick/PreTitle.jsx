import React from 'react'

function PreTitle({ className = "", children, fontSize = "fs-5", fontColor = "text-dark" }) {
    return (
        <div className={` preTitle ${fontSize} ${fontColor} ${className}`}>{children}</div>
    )
}

export default PreTitle
