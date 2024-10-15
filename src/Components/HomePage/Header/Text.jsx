import React from 'react'

function Text({ children, className = "", ...rest }) {
    return (
        <div className={"px-2 fw-600 fs-7 text-align-center " + className} {...rest}>
            {children}
        </div>
    )
}

export default Text