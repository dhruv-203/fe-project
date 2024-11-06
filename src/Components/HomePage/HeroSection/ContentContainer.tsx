import React from 'react'
import { useWindowSize } from '../../../Context/context'

interface ContentContainerProps {
    preTitle: string,
    title: string,
    description: string,
    bottomChild: JSX.Element,
    className?: string,
    titleFontSize?: string,
    preTitleFontSize?: string,
    preTitleOpacity?: string,
    descriptionOpacity?: string,
    padding?: string
}

function ContentContainer({ preTitle, title, description, bottomChild, className = " ", titleFontSize = "title", preTitleFontSize = "fs-5", preTitleOpacity = "opacity-1", descriptionOpacity = "opacity-1", padding = " " }: ContentContainerProps) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className={'my-auto  d-flex flex-column justify-content-between gap-5 ' + className + (isMobile ? " align-items-center " : " align-items-start ")}>
            <div className={"preTitle   fw-600" + " " + preTitleFontSize + " " + preTitleOpacity + " " + padding}>{preTitle}</div>
            <div className={" fw-700  " + (isMobile ? " fs-2 " : titleFontSize) + " " + padding}>{title}</div>
            <div className={"description   fw-600 fs-7 " + descriptionOpacity + " " + padding}>
                {description}
            </div>
            {bottomChild}
        </div>
    )
}

export default ContentContainer
