import { useMemo } from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../../Context/context";
import { RootState } from "../../../Store";
import { useLazyPageChangeQuery } from "../../../Store/Slices/productsApi";
import { Product } from "../../../Store/Types";
import { scrollUp, SortOptions, toBrandsNameArray } from "../../../utils";
import ProductCard from "../../HomePage/BestSeller/ProductCard";
import "./Pagination.css";
// Original code written by me
/*
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useWindowSize } from '../../../Context/context'
import './Pagination.css'
// this data expects an array of jsx elements to display in pagintion 
function Pagination({ data = [] }) {
      let isMobile = (useWindowSize()).isMobile

    const [maxDisplay, setMaxDisplay] = useState(9)
    const [pageNumber, setCurrIndex] = useState(1)
    let [noPages, setNoPages] = useState(Math.ceil((data.length / maxDisplay)))
    const [pages, setPages] = useState([1, 2, 3])

    const handlePrev = () => {
        if (pageNumber !== 1) {
            if (pageNumber === pages[0]) {
                setPages([pageNumber - 1, pageNumber, pageNumber + 1])
            }
            setCurrIndex(pageNumber - 1)
        }
    }

    const handleNext = () => {
        if (pageNumber !== noPages) {
            if (pageNumber === pages[2]) {
                setPages([pageNumber - 1, pageNumber, pageNumber + 1])
            }
            setCurrIndex(pageNumber + 1)
        }
    }

    useEffect(() => {
        if (isMobile) {
            setMaxDisplay(5)
            setNoPages(Math.ceil((data.length / 5)))
        } else {
            setMaxDisplay(9)
            setNoPages(Math.ceil((data.length / 9)))
        }
        setCurrIndex(1) // reseting page index 
        setPages([1, 2, 3]) //reseting pages container
    }, [isMobile])

    return (
        <div className="pagination-container  gap-3 d-flex justify-content-center align-items-center flex-column">
            <div className="display-grid d-flex flex-wrap justify-content-center gap-4 align-items-center p-2">

                {
                    data.slice(((pageNumber - 1) * maxDisplay), ((pageNumber * maxDisplay)))

                }
            </div>
            <div className="numberedGrid  d-flex align-items-stretch p-3  justify-content-center">
                <div className={"number-items fs-7 text-align-center next  " + (pageNumber === 1 ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handlePrev}>Prev</div>
                <div className={"number-items   fs-7  text-align-center " + (pages[0] === pageNumber ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[0])}>{pages[0]}</div>
                <div className={"number-items   fs-7  text-align-center " + (pages[1] === pageNumber ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[1])}>{pages[1]}</div>
                <div className={"number-items  fs-7  text-align-center " + (pages[2] === pageNumber ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[2])}>{pages[2]}</div>
                <div className={"number-items fs-7  text-align-center prev  " + (pageNumber === noPages ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handleNext}>Next</div>
            </div>
        </div>
    )
}

export default Pagination

*/

//Code optimised by gpt by removing some extra states that i created
// this data expects an array of jsx elements to display in pagintion

function Pagination() {
  let { isMobile } = useWindowSize();
  const products = useSelector<RootState, Product[]>(
    (state) => state.products.products
  );
  const pageNumber = useSelector<RootState, number>(
    (state) => state.products.pageNumber
  );
  const [pageChangeTrigger, { isFetching }] = useLazyPageChangeQuery();
  //   setIsPageChanging(isFetching);
  let noPages = useSelector<RootState, number>(
    (state) => state.products.totalPages
  );
  const selectedBrands = useSelector<RootState, { [key: string]: boolean }>(
    (state) => state.products.selectedBrands
  );
  const selectedCategory = useSelector<RootState, string>(
    (state) => state.products.selectedCategory
  );
  const sortOption = useSelector<RootState, SortOptions>(
    (state) => state.products.sortOption
  );
  const minPrice = useSelector<RootState, number>(
    (state) => state.products.minPrice
  );
  const maxPrice = useSelector<RootState, number>(
    (state) => state.products.maxPrice
  );
  const pageSize = useSelector<RootState, number>(
    (state) => state.products.pageSize
  );
  const pages = useMemo(() => {
    if (pageNumber === 1 || noPages <= 3) return [1, 2, 3];
    if (pageNumber === noPages && noPages >= 3)
      return [noPages - 2, noPages - 1, noPages];
    return [pageNumber - 1, pageNumber, pageNumber + 1];
  }, [pageNumber, noPages]);

  const handlePrev = () => {
    scrollUp(isMobile, "smooth", 300, 400);
    if (pageNumber > 1)
      pageChangeTrigger({
        pageNumber: pageNumber - 1,
        selectedBrands: toBrandsNameArray(selectedBrands),
        selectedCategory: selectedCategory,
        minPrice: minPrice,
        maxPrice: maxPrice,
        sortOption: sortOption,
        pageSize: pageSize,
      });
  };

  const handleNext = () => {
    if (pageNumber < noPages)
      pageChangeTrigger({
        pageNumber: pageNumber + 1,
        selectedBrands: toBrandsNameArray(selectedBrands),
        selectedCategory: selectedCategory,
        minPrice: minPrice,
        maxPrice: maxPrice,
        sortOption: sortOption,
        pageSize: pageSize,
      });
    scrollUp(isMobile, "smooth", 300, 400);
  };

  return (
    <div className="pagination-container  gap-3 d-flex justify-content-center align-items-center flex-column">
      {isFetching ? (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "70vh" }}
        >
          <ReactLoading type="spin" color="#007bff" height={100} width={100} />
        </div>
      ) : (
        <div className="display-grid  justify-content-center gap-4 align-items-center p-2">
          {products.map((product) => (
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
        </div>
      )}
      <div className="numberedGrid  d-flex align-items-stretch p-3  justify-content-center">
        <div
          className={
            "number-items fs-7 text-align-center next  " +
            (pageNumber === 1 ? "text-secondary" : "text-primary") +
            (isMobile ? " p-3 " : " p-4 ")
          }
          onClick={handlePrev}
        >
          Prev
        </div>
        {pages.map((page) => (
          <div
            key={page}
            className={
              "number-items fs-7 text-align-center " +
              (page <= noPages
                ? page === pageNumber
                  ? "bg-primary text-light"
                  : "bg-light text-primary"
                : "bg-secondary text-light") +
              (isMobile ? " p-3 " : " p-4 ")
            }
            onClick={() => {
              if (page <= noPages) {
                // console.log(page, noPages)
                scrollUp(isMobile, "smooth", 300, 400);
                pageChangeTrigger({
                  pageNumber: page,
                  selectedBrands: toBrandsNameArray(selectedBrands),
                  selectedCategory: selectedCategory,
                  minPrice: minPrice,
                  maxPrice: maxPrice,
                  sortOption: sortOption,
                  pageSize: pageSize,
                });
              }
            }}
          >
            {page}
          </div>
        ))}
        <div
          className={
            "number-items fs-7  text-align-center prev  " +
            (pageNumber === noPages ? "text-secondary" : "text-primary") +
            (isMobile ? " p-3 " : " p-4 ")
          }
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Pagination;
