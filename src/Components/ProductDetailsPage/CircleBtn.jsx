import React from 'react'

function CircleBtn({ className, children, width, height, bgColor = "#ffff", ...rest }) {
    return (
        <div className={"rounded-circle " + (className)} style={{
            "width": width,
            "height": height,
            "backgroundColor": bgColor
        }}
            {...rest}
        >
            {children}
        </div>
    )
}

export default CircleBtn
