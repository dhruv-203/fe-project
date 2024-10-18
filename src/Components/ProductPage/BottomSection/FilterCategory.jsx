import React from 'react'

function FilterCategory({ className = " ", children }) {
    return (
        <div className={`d-flex flex-column align-items-start justify-content-center gap-2 ${className}`}>
            {children}
        </div>
    )
}

export default FilterCategory
