import React from 'react'

function FilterItem({ children, className = " ", onClick }) {
    return (
        <div className={" filter-item fs-7 fw-600 px-2 py-1 " + className} onClick={onClick}>{children}</div>
    )
}

export default FilterItem
