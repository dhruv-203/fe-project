import React from 'react'
import { useWindowSize } from '../../../Context/context'

function ContentContainer({ preTitle, title, description, bottomChild, className = "", titleFontSize = "title", preTitleFontSize = "fs-5", preTitleOpacity = "opacity-1", descriptionOpacity = "opacity-1" }) {
    let isMobile = useWindowSize()
    return (
        <div className={'my-auto  d-flex flex-column justify-content-between gap-5' + className + (isMobile ? " align-items-center " : " align-items-start ")}>
            <div className={"preTitle   fw-600" + " " + preTitleFontSize + " " + preTitleOpacity}>{preTitle}</div>
            <div className={" fw-700  " + (isMobile ? " fs-2 " : titleFontSize)}>{title}</div>
            <div className={"description   fw-600 fs-7" + descriptionOpacity}>
                {description}
            </div>
            {bottomChild}
        </div>
    )
}

export default ContentContainer
