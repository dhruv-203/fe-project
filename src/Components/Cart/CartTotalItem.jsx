import React from 'react'

function CartTotalItem({ className, children }) {
    return (
        <div className={' fs-6 d-flex justify-content-between align-items-center w-100 ' + className}>
            {children}
        </div>
    )
}

export default CartTotalItem
