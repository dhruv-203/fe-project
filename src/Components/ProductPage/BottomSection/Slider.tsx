import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store";
import { useLazyByPriceQuery } from "../../../Store/Slices/productsApi";
import {
  changeMaxPrice,
  changeMinPrice,
} from "../../../Store/Slices/productsSlice";
import { debounce, SortOptions, toBrandsNameArray } from "../../../utils";
import "./Slider.css"; // This is for our custom styles
const Slider = ({
  isFiltersLoading,
  setIsFiltersLoading,
  isBrandsLoading,
  isCategoryLoading,
}: {
  isFiltersLoading: boolean;
  setIsFiltersLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isBrandsLoading: boolean;
  isCategoryLoading: boolean;
}) => {
  const maxLimit = useSelector<RootState, number>(
    (state) => state.products.maxPriceLimit
  );
  const minLimit = useSelector<RootState, number>(
    (state) => state.products.minPriceLimit
  );
  const maxValue = useSelector<RootState, number>(
    (state) => state.products.maxPrice
  );
  const minValue = useSelector<RootState, number>(
    (state) => state.products.minPrice
  );
  const pageSize = useSelector<RootState, number>(
    (state) => state.products.pageSize
  );
  const selectedBrands = useSelector<RootState, { [key: string]: boolean }>(
    (state) => state.products.selectedBrands
  );
  const sortOption = useSelector<RootState, SortOptions>(
    (state) => state.products.sortOption
  );
  const selectedCategory = useSelector<RootState, string>(
    (state) => state.products.selectedCategory
  );

  const dispatcher = useDispatch();
  const [priceApiTrigger, { isFetching }] = useLazyByPriceQuery();
  setIsFiltersLoading(isCategoryLoading || isFetching || isBrandsLoading);
  const debouncedTrigger = useMemo(
    () =>
      debounce((params) => {
        priceApiTrigger(params);
      }, 500),
    [priceApiTrigger]
  );
  // useEffect(() => {
  //   setMaxValue(maxLimit);
  //   setMinValue(minLimit);
  // }, [maxLimit, minLimit]);

  // Handle change for the min handle
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value < maxValue) {
      dispatcher(changeMinPrice(value));
      //implement a debouncer and call the api
      debouncedTrigger({
        pageSize: pageSize,
        selectedBrands: toBrandsNameArray(selectedBrands),
        selectedCategory: selectedCategory,
        sortOption: sortOption,
        minPrice: value,
        maxPrice: maxValue,
      });
    }
  };

  // Handle change for the max handle
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value > minValue) {
      // setMaxValue(value);
      dispatcher(changeMaxPrice(value));
      //implement a debouncer and call the api
      debouncedTrigger({
        pageSize: pageSize,
        selectedBrands: toBrandsNameArray(selectedBrands),
        selectedCategory: selectedCategory,
        sortOption: sortOption,
        minPrice: minValue,
        maxPrice: value,
      });
    }
  };

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className="slider-thumb slider-thumb-left"
          disabled={isFetching}
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider-thumb slider-thumb-right"
          disabled={isFetching}
        />
        <div className="slider-track"></div>
        <div
          className="slider-range"
          style={{
            left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
            right: `${
              100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100
            }%`,
          }}
        ></div>
      </div>
      <div className="slider-values">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </>
  );
};

export default Slider;
