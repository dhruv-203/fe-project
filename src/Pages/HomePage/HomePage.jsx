import React from 'react'
import { useWindowSize } from '../../Context/context'
import Carousel from '../../Components/HomePage/HeroSection/Carousel';
import Btn from '../../Components/HomePage/HeroSection/Btn';
import BtnContainer from '../../Components/HomePage/HeroSection/BtnContainer';
import heroImg from '../../Assets/home-page/hero-section-2.png'
function HomePage() {
  let isMobile = useWindowSize();
  console.log(isMobile)
  return (
    <div>
      <Carousel className=" " data={

        [
          {
            "preTitle": "SUMMER 2020",
            "title": "NEW COLLECTION",
            "description": "We know how large objects will act, but things on a small scale.",
            "bottomChild": <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>SHOP NOW</Btn>
          },
          {
            "preTitle": "SUMMER 2020",
            "title": "VITA CLASSIC PRODUCT",
            "description": "We know how large objects will act, We know how are objects will act, We know",
            "bottomChild": <BtnContainer><Btn className={"fs-4 fw-700 "}>$16.48</Btn><Btn className={"fs-6 text-light bg-success rounded fw-700"}>ADD TO CART</Btn></BtnContainer>,
            heroImg: heroImg,
            imgHeight: "100%",
            imgWidth: "100%"
          },

        ]

      } />
    </div>
  )
}

export default HomePage
