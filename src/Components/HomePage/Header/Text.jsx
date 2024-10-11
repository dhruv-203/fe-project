import React from 'react'

function Text({ children, className = "" }) {
    return (
        <div className={"px-2 fw-600 fs-7 text-align-center " + className}>
            {children}
        </div>
    )
}

export default Text