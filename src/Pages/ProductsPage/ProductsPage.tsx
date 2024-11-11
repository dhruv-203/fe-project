import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import Carousel from '../../Components/ProductPage/TopSection/Carousel'
import CarouselItem from '../../Components/ProductPage/TopSection/CarouselItem'
import category1 from '../../Assets/product-page/Categories/category-1.png'
import category2 from '../../Assets/home-page/hero-section.jpg'
import category3 from '../../Assets/product-page/Categories/category-3.png'
import category5 from '../../Assets/product-page/Categories/category-5.png'
import category4 from '../../Assets/product-page/Categories/caegory-4.png'
import MobileFilter from '../../Components/ProductPage/BottomSection/MobileFilter'
import { useWindowSize } from '../../Context/context'
import FiltersContainer from '../../Components/ProductPage/BottomSection/FiltersContainer'
import DesktopPaginationHeader from '../../Components/ProductPage/BottomSection/DesktopPaginationHeader'
import './ProductPage.css'
import Pagination from '../../Components/ProductPage/BottomSection/Pagination'
import { giveData } from './data2'
import ProductCard from '../../Components/HomePage/BestSeller/ProductCard'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import { NavLink } from 'react-router-dom'
function ProductsPage() {
  let isMobile = (useWindowSize()).isMobile

  return (
    <>
      <div className="product-top-section d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <BreadCrumb title={"Shop"} />
        </div>
        <Carousel className='w-80' DataItems={[
          <CarouselItem img={category1} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category2} categoryTitle={"WoMEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category3} categoryTitle={"KID'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category4} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category5} categoryTitle={"BEAUTY"} numberOfItems={5} />, <CarouselItem img={category1} categoryTitle={"ACCESSORIES"} numberOfItems={5} />, <CarouselItem img={category2} categoryTitle={"JHIJH KJBKJ"} numberOfItems={5} />, <CarouselItem img={category3} categoryTitle={"MEN'S CLOTHING"} numberOfItems={5} />, <CarouselItem img={category4} categoryTitle={"ASKJN ASKJN"} numberOfItems={5} />, <CarouselItem img={category5} categoryTitle={"ASKJN KASJDN"} numberOfItems={5} />
        ]} numberOfItemsToShowInDesktop={5} numberOfItemsToShowInMobile={2} />
      </div>

      <div className="mt-5 container product-listing-grid w-100">
        {isMobile ? <MobileFilter /> : <FiltersContainer />}
        <div className={`sidebar-container d-flex flex-column gap-2 align-items-center justify-content-start ${isMobile ? "w-100 my-4" : " "}`}>
          {isMobile ? <></> : <DesktopPaginationHeader />}

          <Pagination data={giveData().map((val) => {
            return (<NavLink to={`${val.id}`} key={val.id}>
              <ProductCard url={val.displayImage} title={val.title} description={val.shortDescription} ogPrice={val.originalPrice} discountPrice={val.discountedPrice} colors={val.colors} />
            </NavLink>)
          })} />
        </div>
      </div>

      <BrandLogosContainer></BrandLogosContainer>


    </>
  )
}

export default ProductsPage
