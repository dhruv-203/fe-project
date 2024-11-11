import React, { useState } from 'react'
import './CustomNumberInput.css'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { useCart } from '../../Context/context'

interface CustomNumberInputProps {
    id: string,
    color: string
}

function CustomNumberInput({ id, color }: CustomNumberInputProps) {
    const { updateCart, getQuantity } = useCart()
    const [count, setCount] = useState(getQuantity(id, color))
    return (
        <div className="quantity-container p-2">
            <input className='rounded' onChange={(e) => {

                if (!isNaN(+e.target.value)) {
                    if (+e.target.value === 0) {
                        updateCart(id, color, 1)
                        setCount(1)
                        return
                    }
                    updateCart(id, color, +e.target.value)
                    setCount(+e.target.value);
                    return
                }
                else {
                    return
                }
            }} type="number" name="quantity" value={getQuantity(id, color)} />
            <BiChevronUp className='up-arrow fs-5' onClick={() => {
                updateCart(id, color, (count + 1))
                setCount(count + 1)
            }} />
            <BiChevronDown className='down-arrow fs-5' onClick={() => {
                setCount(count > 1 ? count - 1 : 1)
                updateCart(id, color, count > 1 ? count - 1 : 1)
            }} />
        </div>
    )
}

export default CustomNumberInput
