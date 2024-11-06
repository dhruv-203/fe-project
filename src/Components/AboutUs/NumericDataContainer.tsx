import React from 'react'
import SlotCounter from 'react-slot-counter'
import './NumericDataContainer.css'
interface NumericDataContainerProps {
    title: string,
    description: string
}
function NumericDataContainer({ title, description }: NumericDataContainerProps) {
    return (
        <div className="my-auto text-align-center">
            <SlotCounter charClassName='char fw-600 ' containerClassName='text-align-center mx-auto' value={title} />
            <div className="num-descrip fs-6 p-1 fw-500 text-secondary mx-auto">{description}</div>
        </div>
    )
}

export default NumericDataContainer
