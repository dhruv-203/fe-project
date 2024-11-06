import React, { HTMLAttributes, ReactNode } from 'react'

interface CircleBtnProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: ReactNode,
    width: string,
    height: string,
    bgColor?: string
}

function CircleBtn({ className = " ", children = <></>, width, height, bgColor = "#ffff", ...rest }: CircleBtnProps) {
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
