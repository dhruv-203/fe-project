import React, { ReactNode } from 'react'
import { useWindowSize } from '../../Context/context'

interface AdditionalInfoTitleProps {
    className?: string,
    children: ReactNode
}

function AdditionalInfoTitle({ className, children }: AdditionalInfoTitleProps) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className={"  fw-700 " + (isMobile ? " fs-5 " : " fs-4 ") + (className)}>
            {children}
        </div>
    )
}

export default AdditionalInfoTitle
