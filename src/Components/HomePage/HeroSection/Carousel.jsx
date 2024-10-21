import React, { useEffect } from 'react'
import "../../../utility.css"
import { useWindowSize } from '../../../Context/context';
import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";
import './Carousel.css'
import { useState } from 'react';
import CarouselItem from './CarouselItem';
function Carousel({ className = "", data }) {
  let isMobile = (useWindowSize()).isMobile

  const [currItem, setCurrItem] = useState(0)
  function handleForward() {
    if (currItem >= data.length - 1) {
      setCurrItem(0)
    }
    else setCurrItem(currItem + 1)
  }

  function handleBackward() {
    if (currItem <= 0) {
      setCurrItem(data.length - 1)
    }
    else {
      setCurrItem(currItem - 1)
    }
  }
  return (
    <div className={'carousel ' + className} >
      <span className="fwd-icon title text-light fw-700" onClick={() => { handleForward() }}>
        <IoChevronForward />
      </span>
      <span className="prev-icon title  text-light fw-700" onClick={() => handleBackward()}>
        <IoChevronBackSharp />
      </span>
      {isMobile ? <></> : <span className="carousel-controller-container d-flex gap-0 justify-content-center align-items-center">
        <div className={"first-bar bg-light controller-bar " + (currItem === 0 ? "selected" : "")} onClick={() => setCurrItem(0)}></div>
        <div className={"second-bar bg-light controller-bar " + (currItem === 1 ? "selected" : "")} onClick={() => setCurrItem(1)}></div>
      </span>}
      {
        <CarouselItem key={currItem} className={data[currItem].title === "NEW COLLECTION" ? "carousel-item-1" : " "} data={data[currItem]} />
      }

    </div>
  )
}

export default Carousel
