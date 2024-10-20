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
import Layout from '../../Components/HomePage/Layout';
import img from '../../Assets/home-page/product-branding.png'
import postImg1 from '../../Assets/home-page/posts-images/post-1.jpg'
import postImg2 from '../../Assets/home-page/posts-images/post-2.jpg'
import postImg3 from '../../Assets/home-page/posts-images/post-3.jpg'
import PostGrid from '../../Components/HomePage/Posts/PostGrid';
import Post from '../../Components/HomePage/Posts/Post';
import { useState } from 'react';
function HomePage() {
  let isMobile = useWindowSize();


  return (
    <div>
      <Carousel className=" "
        data={[
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

        ]}

      />
      <Layout className="editorsPick">
        <SectionTitleContainer className={" p-4 "}>
          <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >Editor's Pick</SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>Problems trying to resolve the conflict between</SectionDescription>
        </SectionTitleContainer>
        <CategoryGrid />
      </Layout>
      <Layout className="bestSeller">
        <SectionTitleContainer className={" p-4 "}>
          <PreTitle fontColor='text-dark' fontSize='fs-5' className={"opacity-06 fw-600"} >Featured Products</PreTitle>
          <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >BESTSELLER PRODUCTS</SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={"p-2"}>Problems trying to resolve the conflict between</SectionDescription>
        </SectionTitleContainer>
        <BestSellerGrid />
      </Layout>
      <Carousel className=" mt-5 " data={

        [
          {
            "preTitle": "SUMMER 2020",
            "title": "VITA CLASSIC PRODUCT",
            "description": "We know how large objects will act, We know how are objects will act, We know",
            "bottomChild": <BtnContainer><div className={"px-2 py-3 fs-4 fw-700 "}>$16.48</div><Btn className={"fs-6 text-light bg-success rounded fw-700"}>ADD TO CART</Btn></BtnContainer>,
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
      }
      />
      <div className="container image-content-section h-100">
        <SectionContainer
          className='asian-lady-container'
          img={img}
        />
      </div>
      <Layout className="posts">
        <SectionTitleContainer className={" p-4 "}>
          <PreTitle fontColor='text-primary' fontSize='fs-7' className={" fw-600 "} >Practice Advice</PreTitle>
          <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >Featured Posts</SectionTitle>
          <SectionDescription fontColor={"text-dark "} className={" p-2"}>Problems trying to resolve the conflict between
            <br /> the two major realms of Classical physics: Newtonian mechanics </SectionDescription>
        </SectionTitleContainer>
        <PostGrid>
          <Post img={postImg1} />
          <Post img={postImg2} />
          <Post img={postImg3} />
        </PostGrid>
      </Layout>

    </div>
  )
}

export default HomePage
