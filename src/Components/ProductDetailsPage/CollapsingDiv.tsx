import React, { ReactNode } from 'react'
import { useState } from 'react'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa6'
import './CollapsingDiv.css'

interface CollapsingDivProps {
    title: string,
    content: ReactNode,
}

function CollapsingDiv({ title, content }: CollapsingDivProps) {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div className="collapsing-container w-100">
            <div className="collapse-head p-2 d-flex alig-items-center justify-content-start gap-2" onClick={() => setOpen(!isOpen)}>
                {isOpen ? <FaChevronDown className='fs-6' /> : <FaChevronRight className='fs-6' />}
                <div className="fs-7 text-secondary">{title}</div>

            </div>
            {isOpen ? <div className="p-2  collapse-content fs-7 text-secondary ">
                {content}
            </div> : <></>}
        </div>
    )
}

export default CollapsingDiv
