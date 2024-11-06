import React, { ReactNode } from 'react'

interface PostGridProps {
    className?: string,
    children: ReactNode
}

function PostGrid({ className = " ", children }: PostGridProps) {
    return (
        <div className={"postGrid  p-2 d-flex justify-content-center align-items-center gap-3"}>
            {children}
        </div>
    )
}

export default PostGrid
