import React from 'react'

function BtnContainer({ children, className = " gap-4 " }) {
    return (
        <div className={'d-flex flex-wrap align-items-center justify-content-center ' + className}>
            {children}
        </div>
    )
}

export default BtnContainer
