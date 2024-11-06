import React, { ReactNode } from 'react'

interface FilterHeadProps {
    className?: string,
    children: ReactNode
}

function FilterHead({ className = " ", children }: FilterHeadProps) {
    return (
        <div className={" filter-head fs-6 fw-600 px-2 py-1 " + className}>
            {children}
        </div>
    )
}

export default FilterHead
