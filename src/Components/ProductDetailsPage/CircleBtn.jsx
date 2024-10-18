import React from 'react'

function CircleBtn({ className, children, width, height, bgColor = "#ffff" }) {
    return (
        <div className={"rounded-circle " + (className)} style={{
            "width": width,
            "height": height,
            "backgroundColor": bgColor
        }}>
            {children}
        </div>
    )
}

export default CircleBtn
