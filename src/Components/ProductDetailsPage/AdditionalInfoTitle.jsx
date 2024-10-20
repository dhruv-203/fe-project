import React from 'react'
import { useWindowSize } from '../../Context/context'
function AdditionalInfoTitle({ className, children }) {
    const isMobile = useWindowSize()
    return (
        <div className={"  fw-700 " + (isMobile ? " fs-5 " : " fs-4 ") + (className)}>
            {children}
        </div>
    )
}

export default AdditionalInfoTitle
