import React from 'react'

function BtnContainer({ children }) {
    return (
        <div className='d-flex gap-4 flex-wrap align-items-center justify-content-center'>
            {children}
        </div>
    )
}

export default BtnContainer
