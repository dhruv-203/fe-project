import React, { ReactNode } from 'react'
interface FilterCategoryProps {
    className?: string,
    children: ReactNode
}
function FilterCategory({ className = " ", children }: FilterCategoryProps) {
    return (
        <div className={`d-flex flex-column align-items-start justify-content-center gap-2 ${className}`}>
            {children}
        </div>
    )
}

export default FilterCategory
