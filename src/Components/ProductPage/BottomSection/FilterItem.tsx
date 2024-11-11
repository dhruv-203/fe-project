import React, { HTMLAttributes, ReactNode } from 'react'
interface FilterItemProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string,

}
function FilterItem({ children, className = " ", ...rest }: FilterItemProps) {
    return (
        <div className={" filter-item fs-7 fw-600 px-2 py-1 " + className} {...rest}>{children}</div>
    )
}

export default FilterItem
