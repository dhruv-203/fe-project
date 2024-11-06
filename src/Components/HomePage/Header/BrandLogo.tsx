import React, { ReactNode } from 'react'
import '../../../utility.css'

interface BrandLogo {
    className?: string,
    children?: ReactNode
}

function BrandLogo({ className = " ", children = "Bandage" }: BrandLogo) {
    return (
        <div className={'fs-4 fw-700 text-dark ' + className}>
            {children}
        </div>
    )
}

export default BrandLogo
