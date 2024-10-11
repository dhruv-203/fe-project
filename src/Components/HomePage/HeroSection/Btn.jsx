import React from 'react'

function Btn({ className = "", children, ...rest }) {
    return (
        <div className={"px-5 py-3 " + className} {...rest} >
            {children}
        </div>
    )
}

export default Btn
