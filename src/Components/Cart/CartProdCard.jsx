import React from 'react'
import CircleBtn from '../ProductDetailsPage/CircleBtn'
import CartText from './CartText'
import CustomNumberInput from './CustomNumberInput'
import { RxCross2 } from 'react-icons/rx'
import { useCart } from '../../Context/context'

function CartProdCard({ data }) {
    const { updateCart, removeFromCart } = useCart()

    return (
        <div className="d-flex cart-product-card justify-content-between p-3">
            <div className="cart-product-detail d-flex gap-3 align-items-center">
                <div style={{ backgroundImage: data.img }} className="cart-product-image rounded px-2">
                    <CircleBtn width={"18px"} className={"cross-btn"} onClick={() => removeFromCart(data.prodID, data.prodColor)} bgColor='#db4444' height={"18px"} ><RxCross2 className='text-light cross fs-6' /></CircleBtn>
                </div>
                <div className=" cart-product-content flex-column gap-3 align-items-start px-2 ">
                    <CartText className={" product-title fw-600 p-2"}>{data.prodName}</CartText>
                    <span className="d-flex gap-3 p-2"><CartText className={" product-title fw-600 "}>Color: </CartText> <CircleBtn height={"30px"} width={"30px"} bgColor={data.prodColor} /></span>
                    <span className="d-flex gap-3 p-2 "><CartText className={" product-title fw-600 "}>Price: </CartText> <CartText className={" fw-400 "} >${data.prodPrice}</CartText></span>
                </div>

            </div>
            <div className="sub-total p-2 fw-600 fs-6">{parseFloat((+data.prodQuant) * (+data.prodPrice)).toFixed(2)}</div>
            <CustomNumberInput id={data.prodID} color={data.prodColor} />
        </div>
    )
}

export default CartProdCard
