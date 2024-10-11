import React from 'react'
import '../../../utility.css'
function LogoContainer({ children, className = "" }) {
    return (
        <div className={"d-flex align-items-center justify-content-center " + className}>
            {children}
        </div>
    )
}

export default LogoContainer
