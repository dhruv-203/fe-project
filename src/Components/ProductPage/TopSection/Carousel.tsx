import React, { useEffect } from 'react'
import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";
import { useState } from 'react';
import { useWindowSize } from '../../../Context/context';
import './Carousel.css'
import { Fragment } from 'react';
//DataItems is an array of JSX Elements which are carousel items 

interface CarouselProps {
    className?: String,
    DataItems: JSX.Element[],
    numberOfItemsToShowInDesktop: number,
    numberOfItemsToShowInMobile: number,
    BottomIndicators?: React.ComponentType<{ handleIndicatorClick: (ind: number) => void; head: number }>
}

function Carousel({ className = " ", DataItems, numberOfItemsToShowInDesktop, numberOfItemsToShowInMobile, BottomIndicators }: CarouselProps) {
    let isMobile = (useWindowSize()).isMobile

    const [tail, setTail] = useState(isMobile ? numberOfItemsToShowInMobile : numberOfItemsToShowInDesktop)
    const [head, setHead] = useState(0)
    useEffect(() => {
        setHead(0)
        setTail((0 + (isMobile ? numberOfItemsToShowInMobile : numberOfItemsToShowInDesktop)))
    }, [isMobile])
    function handleForward() {
        console.log("Forward: " + tail)
        if (tail < DataItems.length) {
            setTail(tail + 1)
            setHead(head + 1)
        }
    }
    function handleBackward() {
        console.log("Backward: " + tail)
        if (head > 0) {
            setHead(head - 1)
            setTail(tail - 1)
        }
    }
    function handleIndicatorClick(ind: number) {
        setHead(ind)
        setTail((ind + (isMobile ? numberOfItemsToShowInMobile : numberOfItemsToShowInDesktop)))
    }

    return (
        <div className={'carousel-2  p-2 d-flex  align-items-center justify-content-center ' + className}>
            <span className={"forward fs-2 p-1 fw-500 " + (tail === DataItems.length ? "text-secondary" : "text-primary")} onClick={handleForward}>
                <IoChevronForward />
            </span>
            <span className={"backward fs-2 p-1 fw-500 " + (head === 0 ? "text-secondary" : "text-primary")} onClick={handleBackward}>
                <IoChevronBackSharp />
            </span>
            <div className="carouselItemContainer container gap-3 d-flex justify-content-center align-items-center">
                {DataItems.slice(head, tail).map((val, ind) => <Fragment key={ind} >{val}</Fragment>)}
            </div>
            {BottomIndicators ? <BottomIndicators handleIndicatorClick={handleIndicatorClick} head={head} /> : null}
        </div>
    )
}

export default Carousel
