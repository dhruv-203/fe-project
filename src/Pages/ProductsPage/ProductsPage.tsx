import { useState } from "react";
import { useSelector } from "react-redux";
import DesktopPaginationHeader from "../../Components/ProductPage/BottomSection/DesktopPaginationHeader";
import FiltersContainer from "../../Components/ProductPage/BottomSection/FiltersContainer";
import MobileFilter from "../../Components/ProductPage/BottomSection/MobileFilter";
import Pagination from "../../Components/ProductPage/BottomSection/Pagination";
import BrandLogosContainer from "../../Components/ProductPage/BrandLogosContainer";
import BreadCrumb from "../../Components/ProductPage/TopSection/BreadCrumb";
import Carousel from "../../Components/ProductPage/TopSection/Carousel";
import CarouselItem from "../../Components/ProductPage/TopSection/CarouselItem";
import { useWindowSize } from "../../Context/context";
import { RootState } from "../../Store";
import "./ProductPage.css";

// Import your category images
import ReactLoading from "react-loading";
import { useLazyByCategoryQuery } from "../../Store/Slices/productsApi";
import { SortOptions } from "../../utils";

function ProductsPage() {
  const isMobile = useWindowSize().isMobile;

  const products = useSelector((state: RootState) => {
    return state.products.products;
  });
  const pageSize = useSelector<RootState, number>(
    (state) => state.products.pageSize
  );
  const sortOption = useSelector<RootState, SortOptions>(
    (state) => state.products.sortOption
  );
  const categoryList = useSelector(
    (state: RootState) => state.products.categoryList
  );
  const itemsPerCategory = useSelector(
    (state: RootState) => state.products.itemsCountPerCategory
  );
  const [filterByCategoryTrigger, { isFetching: isCategoryLoading }] =
    useLazyByCategoryQuery();
  const [isFiltersLoading, setIsFiltersLoading] = useState(false);
  if (products.length === 0 && categoryList.length === 0) {
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#007bff"
        height={400}
        width={400}
        className="container "
      />
    );
  }

  const carouselItems = categoryList.map((val) => ({
    img: val.img,
    title: val.name,
    items: itemsPerCategory[val.name],
  }));

  return (
    <>
      <div className="product-top-section d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <BreadCrumb title="Shop" />
        </div>
        <Carousel
          className="w-80"
          DataItems={carouselItems.map((item) => (
            <CarouselItem
              img={item.img}
              categoryTitle={item.title}
              numberOfItems={item.items}
              onClick={() => {
                filterByCategoryTrigger({
                  selectedCategory: item.title,
                  pageSize: pageSize,
                  sortOption: sortOption,
                });
              }}
            />
          ))}
          numberOfItemsToShowInDesktop={5}
          numberOfItemsToShowInMobile={2}
        />
      </div>

      <div className="mt-5 container product-listing-grid w-100">
        {isMobile ? (
          <MobileFilter
            isFiltersLoading={isFiltersLoading}
            setIsFiltersLoading={setIsFiltersLoading}
          />
        ) : (
          <FiltersContainer
            isFiltersLoading={isFiltersLoading}
            setIsFiltersLoading={setIsFiltersLoading}
          />
        )}
        <div
          className={`sidebar-container d-flex flex-column gap-2 align-items-center 
            justify-content-start ${isMobile ? "w-100 my-4" : ""}`}
        >
          {!isMobile && <DesktopPaginationHeader />}

          {isFiltersLoading ? (
            <div
              className="container-fluid d-flex align-items-center justify-content-center"
              style={{ height: "70vh" }}
            >
              <ReactLoading
                type="spin"
                color="#007bff"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <Pagination />
          )}
        </div>
      </div>

      <BrandLogosContainer />
    </>
  );
}

export default ProductsPage;
