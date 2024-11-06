import React, { ReactNode } from 'react'
import '../../../utility.css'

interface BrandLogoProps {
    className?: string,
    children?: ReactNode
}

function BrandLogo({ className = " ", children = "Bandage" }: BrandLogoProps) {
    return (
        <div className={'fs-4 fw-700 text-dark ' + className}>
            {children}
        </div>
    )
}

export default BrandLogo
