import React, { useEffect, useRef } from 'react'
import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";
import { useState } from 'react';
import { useWindowSize } from '../../../Context/context';
import './Carousel.css'
import { Fragment } from 'react';
//DataItems is an array of JSX Elements which are carousel items 
function Carousel({ className, DataItems, numberOfItemsToShowInDesktop, numberOfItemsToShowInMobile }) {
    const isMobile = useWindowSize()
    const [tail, setTail] = useState(isMobile ? numberOfItemsToShowInMobile : numberOfItemsToShowInDesktop)
    const [head, setHead] = useState(0)
    useEffect(() => {
        setTail((head + (isMobile ? numberOfItemsToShowInMobile : numberOfItemsToShowInDesktop)))
    }, [isMobile])
    function handleForward() {
        if (tail < DataItems.length) {
            setTail(tail + 1)
            setHead(head + 1)
        }
    }
    function handleBackward() {
        if (head > 0) {
            setHead(head - 1)
            setTail(tail - 1)
        }
    }

    return (
        <div className='carousel-2  p-2 d-flex w-80 align-items-center justify-content-center '>
            <span className={"forward fs-2 p-1 fw-500 " + (tail === DataItems.length ? "text-secondary" : "text-primary")} onClick={handleForward}>
                <IoChevronForward />
            </span>
            <span className={"backward fs-2 p-1 fw-500 " + (head === 0 ? "text-secondary" : "text-primary")} onClick={handleBackward}>
                <IoChevronBackSharp />
            </span>
            <div className="carouselItemContainer container gap-3 d-flex justify-content-center align-items-center">
                {DataItems.slice(head, tail).map((val, ind) => <Fragment key={ind} >{val}</Fragment>)}
            </div>
        </div>
    )
}

export default Carousel
