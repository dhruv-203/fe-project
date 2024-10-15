import React from 'react'
import PreTitle from '../EditorPick/PreTitle'
function MetaData({ Logo, text, className }) {
    return (
        <div className='d-flex align-items-center justify-content-center gap-1'>
            {Logo} <PreTitle fontSize='fs-7' fontColor='text-secondary' className='fw-400' >  {text}</PreTitle>

        </div>
    )
}

export default MetaData
