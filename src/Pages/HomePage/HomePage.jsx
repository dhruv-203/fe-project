import React from 'react'
import { useWindowSize } from '../../Context/context'
import Carousel from '../../Components/HomePage/HeroSection/Carousel';
import Btn from '../../Components/HomePage/HeroSection/Btn';
import BtnContainer from '../../Components/HomePage/HeroSection/BtnContainer';
import heroImg from '../../Assets/home-page/hero-section-2.png'
import SectionTitleContainer from '../../Components/HomePage/EditorPick/SectionTitleContainer';
import PreTitle from '../../Components/HomePage/EditorPick/PreTitle';
import SectionDescription from '../../Components/HomePage/EditorPick/SectionDescription';
import SectionTitle from '../../Components/HomePage/EditorPick/SectionTitle';
import CategoryGrid from '../../Components/HomePage/EditorPick/CategoryGrid';
import BestSellerGrid from '../../Components/HomePage/BestSeller/BestSellerGrid';
import SectionContainer from '../../Components/HomePage/ImageContent/SectionContainer';
import img from '../../Assets/home-page/product-branding.png'
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
      <div className="editorsPick mt-5 container d-flex flex-column gap-4 align-items-center justify-content-center">
        <SectionTitleContainer className={" p-4 "}>
          <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >Editor's Pick</SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>Problems trying to resolve the conflict between</SectionDescription>
        </SectionTitleContainer>
        <CategoryGrid />
      </div>
      <div className="bestSeller container mt-5 d-flex flex-column align-items-center justify-content-center gap-4">
        <SectionTitleContainer className={" p-4 "}>
          <PreTitle fontColor='text-dark' fontSize='fs-5' className={"opacity-06 fw-600"} >Featured Products</PreTitle>
          <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >BESTSELLER PRODUCTS</SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>Problems trying to resolve the conflict between</SectionDescription>
        </SectionTitleContainer>
        <BestSellerGrid />
      </div>
      <Carousel className=" mt-5 h-40" data={

        [
          {
            "preTitle": "SUMMER 2020",
            "title": "VITA CLASSIC PRODUCT",
            "description": "We know how large objects will act, We know how are objects will act, We know",
            "bottomChild": <BtnContainer><Btn className={"fs-4 fw-700 "}>$16.48</Btn><Btn className={"fs-6 text-light bg-success rounded fw-700"}>ADD TO CART</Btn></BtnContainer>,
            heroImg: heroImg,
            imgHeight: "100%",
            imgWidth: "100%"
          },
          {
            "preTitle": "SUMMER 2020",
            "title": "NEW COLLECTION",
            "description": "We know how large objects will act, but things on a small scale.",
            "bottomChild": <Btn className={"fs-6 text-light bg-success fw-700 rounded"}>SHOP NOW</Btn>
          }

        ]
      } />
      <div className="container py-5 image-content-section">
        <SectionContainer
          className='asian-lady-container'
          img={img}
        />
      </div>
    </div>
  )
}

export default HomePage
