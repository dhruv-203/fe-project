import React, { ReactNode } from 'react'

interface CartTextProps {
    children: ReactNode,
    className?: string,
}

function CartText({ children, className = " " }: CartTextProps) {
    return (
        <div className={' fs-6 ' + className}>
            {children}
        </div>
    )
}

export default CartText
