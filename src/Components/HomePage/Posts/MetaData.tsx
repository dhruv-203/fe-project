import React, { ReactNode } from 'react'
import PreTitle from '../EditorPick/PreTitle'

interface MetaDataProps {
    Logo: ReactNode,
    text: string,
    className?: string
}

function MetaData({ Logo, text, className = " " }: MetaDataProps) {
    return (
        <div className='d-flex align-items-center justify-content-center gap-1'>
            {Logo} <PreTitle fontSize='fs-7' fontColor='text-secondary' className='fw-400' >  {text}</PreTitle>

        </div>
    )
}

export default MetaData
