import React from 'react'
import '../../../utility.css'
function Logo({ children, className = "fs-5 " }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export default Logo
