import React from 'react'

function FilterHead({ className = " ", children }) {
    return (
        <div className={" filter-head fs-6 fw-600 px-2 py-1 " + className}>
            {children}
        </div>
    )
}

export default FilterHead
