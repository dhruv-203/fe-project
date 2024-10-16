import React from 'react'
import '../../../utility.css'

function BrandLogo({ className, children = "Bandage" }) {
    return (
        <div className={'fs-4 fw-700 text-dark ' + className}>
            {children}
        </div>
    )
}

export default BrandLogo
