import React from 'react'

function CartText({ children, className }) {
    return (
        <div className={' fs-6 ' + className}>
            {children}
        </div>
    )
}

export default CartText
