import React from 'react'
import { useWindowSize } from '../../../Context/context'

function ContentContainer({ preTitle, title, description, bottomChild, className = "" }) {
    let isMobile = useWindowSize()
    return (
        <div className={'my-auto  d-flex flex-column justify-content-between gap-5' + className + (isMobile ? " align-items-center " : " align-items-start ")}>
            <div className="preTitle fs-5 fw-600">{preTitle}</div>
            <div className={"fw-700" + (isMobile ? " fs-2" : " title")}>{title}</div>
            <div className="description fw-600  fs-7">
                {description}
            </div>
            {bottomChild}
        </div>
    )
}

export default ContentContainer
