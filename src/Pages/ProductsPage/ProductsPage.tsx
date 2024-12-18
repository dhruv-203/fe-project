import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { filterByCategory, RootState } from '../../Store'
import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import Carousel from '../../Components/ProductPage/TopSection/Carousel'
import CarouselItem from '../../Components/ProductPage/TopSection/CarouselItem'
import MobileFilter from '../../Components/ProductPage/BottomSection/MobileFilter'
import { useWindowSize } from '../../Context/context'
import FiltersContainer from '../../Components/ProductPage/BottomSection/FiltersContainer'
import DesktopPaginationHeader from '../../Components/ProductPage/BottomSection/DesktopPaginationHeader'
import Pagination from '../../Components/ProductPage/BottomSection/Pagination'
import ProductCard from '../../Components/HomePage/BestSeller/ProductCard'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import './ProductPage.css'

// Import your category images
import category1 from '../../Assets/product-page/Categories/category-1.png'
import category2 from '../../Assets/home-page/hero-section.jpg'
import category3 from '../../Assets/product-page/Categories/category-3.png'
import category4 from '../../Assets/product-page/Categories/caegory-4.png'
import category5 from '../../Assets/product-page/Categories/category-5.png'

function ProductsPage() {
  const isMobile = useWindowSize().isMobile
  const dispatcher = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const products = useSelector((state: RootState) => {
    return state.products.filteredProducts
  })
  const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory)
  useEffect(() => {
    setIsLoading(false)
  }, [products, selectedCategory])



  // Optional: Add loading state handling
  if (isLoading && (!products || products.length === 0) && (!selectedCategory || selectedCategory === "")) {
    return <div className="container mt-5">Loading products...</div>
  }

  
  // dispatcher(filterByCategory(selectedCategory))

  const carouselItems = [
    { img: category1, title: "MEN'S CLOTHING", items: 5 },
    { img: category2, title: "WOMEN'S CLOTHING", items: 5 },
    { img: category3, title: "KID'S CLOTHING", items: 5 },
    { img: category5, title: "BEAUTY", items: 5 },
    { img: category1, title: "ACCESSORIES", items: 5 },
    { img: category2, title: "FASHION", items: 5 },
    { img: category3, title: "SPORTS", items: 5 },
    { img: category4, title: "CASUAL", items: 5 },
    { img: category5, title: "FORMAL", items: 5 }
  ]

  return (
    <>
      <div className="product-top-section d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <BreadCrumb title="Shop" />
        </div>
        <Carousel
          className="w-80"
          DataItems={carouselItems.map(item => (
            <CarouselItem
              img={item.img}
              categoryTitle={item.title}
              numberOfItems={item.items}
            />
          ))}
          numberOfItemsToShowInDesktop={5}
          numberOfItemsToShowInMobile={2}
        />
      </div>

      <div className="mt-5 container product-listing-grid w-100">
        {isMobile ? <MobileFilter /> : <FiltersContainer />}
        <div
          className={`sidebar-container d-flex flex-column gap-2 align-items-center 
            justify-content-start ${isMobile ? "w-100 my-4" : ""}`}
        >
          {!isMobile && <DesktopPaginationHeader />}

          {products && products.length > 0 && selectedCategory && selectedCategory.length > 0 ? (
            <Pagination
              data={products.map((product) => (
                <NavLink to={`${product.id}`} key={product.id}>
                  <ProductCard
                    url={product.displayImage}
                    title={product.title}
                    description={product.shortDescription}
                    ogPrice={product.originalPrice}
                    discountPrice={product.discountedPrice}
                    colors={product.colors}
                  />
                </NavLink>
              ))}
            />
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>

      <BrandLogosContainer />
    </>
  )
}

export default ProductsPage