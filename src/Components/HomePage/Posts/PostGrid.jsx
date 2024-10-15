import React from 'react'

function PostGrid({ className, children }) {
    return (
        <div className={"postGrid  p-2 d-flex justify-content-center align-items-center gap-3"}>
            {children}
        </div>
    )
}

export default PostGrid
