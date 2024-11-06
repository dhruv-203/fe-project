import React, { ReactNode } from 'react'

interface CartTotalItemProps {
    className?: string,
    children: ReactNode
}

function CartTotalItem({ className = "", children }: CartTotalItemProps) {
    return (
        <div className={' fs-6 d-flex justify-content-between align-items-center w-100 ' + className}>
            {children}
        </div>
    )
}

export default CartTotalItem
