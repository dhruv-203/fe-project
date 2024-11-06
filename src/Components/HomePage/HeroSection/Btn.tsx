import React, { HTMLAttributes, ReactNode } from 'react'

interface BtnProps extends HTMLAttributes<HTMLDivElement> {
    className: string,
    children: ReactNode,
}

function Btn({ className = " ", children, ...rest }: BtnProps) {
    return (
        <div className={"px-5 py-3 " + className} {...rest} >
            {children}
        </div>
    )
}

export default Btn
