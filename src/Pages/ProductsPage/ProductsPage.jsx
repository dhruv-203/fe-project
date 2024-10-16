import React from 'react'
import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import Carousel from '../../Components/ProductPage/TopSection/Carousel'
import CarouselItem from '../../Components/ProductPage/TopSection/CarouselItem'
import category1 from '../../Assets/product-page/Categories/category-1.png'
import Layout from '../../Components/HomePage/Layout'
function ProductsPage() {
  return (
    <>
      <div className="product-top-section d-flex align-items-center justify-content-center flex-column">
        <BreadCrumb title={"Shop"} />
        <Carousel DataItems={[
          <CarouselItem img={category1} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"WoMEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"KID'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"BEAUTY"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"ACCESSORIES"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"JHIJH KJBKJ"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"ASKJN ASKJN"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"ASKJN KASJDN"} numberOfItems={5} />
        ]} numberOfItemsToShowInDesktop={5} numberOfItemsToShowInMobile={2} />
      </div>


    </>
  )
}

export default ProductsPage
