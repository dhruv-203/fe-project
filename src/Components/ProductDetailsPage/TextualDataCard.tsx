import React, { useState } from 'react'
import { RxStarFilled, RxStar } from "react-icons/rx";
import LogoContainer from '../HomePage/Header/LogoContainer';
import PreTitle from '../HomePage/EditorPick/PreTitle';
import SectionDescription from '../HomePage/EditorPick/SectionDescription';
import { HiOutlineHeart } from 'react-icons/hi2';
import { BsCart, BsCartCheck } from 'react-icons/bs';
import { IoMdEye } from "react-icons/io";
import CircleBtn from './CircleBtn';
import './TextualData.css'
import { useWindowSize, useCart } from '../../Context/context';

interface TextualDataType {
    img: string,
    id: string,
    title: string,
    price: number,
    reviewCount: number,
    rating: number,
    productDescription: string,
    colors: string[]
}

function TextualDataCard({ data }: { data: TextualDataType }) {
    let {isMobile} = (useWindowSize())
    let { addToCart, productExists, getQuantity, removeFromCart } = useCart()
    let [selectedColor, setSelectedColor] = useState(data.colors[0])
    return (
        <div className='d-flex flex-column text-data-card p-3 gap-2 justify-content-start mb-auto align-items-start'>
            <PreTitle className='p-2 fw-600'>{data.title}</PreTitle>
            <div className="reviews-ratings-container p-2 d-flex justify-content-center align-items-center gap-3">
                <LogoContainer className='gap-1 '>
                    {
                        Array.from({ length: 5 }, (v, i) => ((i + 1 <= data.rating) ? <RxStarFilled key={i} className='text-warning' /> : <RxStar key={i} className='text-warning' />))
                    }
                </LogoContainer>
                <SectionDescription >{data.reviewCount} Reviews</SectionDescription>
            </div>
            <div className="fs-4 p-2 fw-700 text-dark">${data.price}</div>
            <div className="fw-400 opacity-06 fs-7 p-2">{data.productDescription}</div>
            <div className="line w-90 "></div>
            <div className="d-flex align-items-center justify-content-between gap-2 p-2 ">
                {data.colors.map((val) => {
                    return <CircleBtn className={selectedColor === val ? " border border-3 border-secondary  " : " "} onClick={() => setSelectedColor(val)} key={val} width={"30px"} height={"30px"} bgColor={val} />
                })}
            </div>
            <div className="action-btns-container mt-4 p-2  d-flex justify-content-center align-items-center gap-2">
                <div className={' bg-primary  select-btn fw-600 fs-7 text-light ' + (isMobile ? "p-2 py-3" : "p-3")} >Select Options</div>
                <CircleBtn className={"d-flex p-1 align-items-center justify-content-center option-btn"} width={" 30px "} height={" 30px "} ><HiOutlineHeart className='fs-6' /></CircleBtn>
                {
                    productExists(data.id, selectedColor) ? <CircleBtn className={" d-flex p-1 justify-content-center align-items-center option-btn "} width={" 30px "} height={" 30px "}  > <BsCartCheck className='fs-6' onClick={() => {
                        removeFromCart(data.id, selectedColor)
                    }} /> </CircleBtn> : <CircleBtn className={" d-flex p-1 justify-content-center align-items-center option-btn "} width={" 30px "} height={" 30px "} onClick={() => {
                        addToCart({
                            img: data.img,
                            prodID: data.id,
                            prodName: data.title,
                            prodPrice: data.price,
                            prodQuant: getQuantity(data.id, selectedColor) + 1,
                            prodColor: selectedColor
                        })
                    }} > <BsCart className='fs-6' /> </CircleBtn>}

                <CircleBtn className={" d-flex p-1 justify-content-center align-items-center option-btn"} width={" 30px "} height={" 30px "} ><IoMdEye className='fs-6' /></CircleBtn>
            </div>
        </div>
    )
}

export default TextualDataCard
