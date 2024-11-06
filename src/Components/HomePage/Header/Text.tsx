import React, { HTMLAttributes, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string
}

function Text({ children, className = "", ...rest }: TextProps) {
    return (
        <div className={"px-2 fw-600 fs-7 text-align-center " + className} {...rest}>
            {children}
        </div>
    )
}

export default Text