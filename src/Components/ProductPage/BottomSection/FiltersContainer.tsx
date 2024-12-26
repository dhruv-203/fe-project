import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../../Context/context";
import { RootState } from "../../../Store";
import {
  useLazyByBrandsQuery,
  useLazyByCategoryQuery,
} from "../../../Store/Slices/productsApi";
import { changeSelectedBrands } from "../../../Store/Slices/productsSlice";
import { Category } from "../../../Store/Types";
import { SortOptions, toBrandsNameArray } from "../../../utils";
import FilterCategory from "./FilterCategory";
import FilterHead from "./FilterHead";
import FilterItem from "./FilterItem";
import Slider from "./Slider";
function FiltersContainer({
  isFiltersLoading,
  setIsFiltersLoading,
}: {
  isFiltersLoading: boolean;
  setIsFiltersLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMobile } = useWindowSize();
  const categoryList = useSelector<RootState, Category[]>(
    (state) => state.products.categoryList
  );
  const sortOption = useSelector<RootState, SortOptions>(
    (state) => state.products.sortOption
  );

  const dispatcher = useDispatch();
  const selectedCategory = useSelector<RootState, string>(
    (state) => state.products.selectedCategory
  );

  const pageSize = useSelector<RootState, number>(
    (state) => state.products.pageSize
  );

  const [filterByCategoryTrigger, { isFetching: isCategoryLoading }] =
    useLazyByCategoryQuery();

  const [filterByBrandsTrigger, { isFetching: isBrandsLoading }] =
    useLazyByBrandsQuery();

  const Brands = useSelector<RootState, string[]>(
    (state) => state.products.availableBrands
  );

  const selectedBrands = useSelector<RootState, { [key: string]: boolean }>(
    (state) => state.products.selectedBrands
  );

  return (
    <div
      className={` filter-items-container  gap-3  d-flex ${
        isMobile
          ? "align-items-center w-100 my-4"
          : "align-items-start px-2 justify-self-start"
      } justify-content-center flex-column`}
    >
      {isMobile ? <></> : <FilterHead>Filters</FilterHead>}
      <FilterCategory className=" filter-by-category ">
        <FilterHead>All Categories</FilterHead>
        {categoryList.map((val: Category) => (
          <FilterItem
            key={val.name}
            className={
              selectedCategory === val.name ? "text-primary" : "text-secondary"
            }
            onClick={() => {
              filterByCategoryTrigger({
                selectedCategory: val.name,
                pageSize: pageSize,
                sortOption: sortOption,
              });
            }}
          >
            {val.name}
          </FilterItem>
        ))}
      </FilterCategory>
      <FilterCategory className="filter-by-price ">
        <FilterHead>Price</FilterHead>
        <div className="slider-container">
          <Slider
            isFiltersLoading={isFiltersLoading}
            setIsFiltersLoading={setIsFiltersLoading}
            isCategoryLoading = {isCategoryLoading}
            isBrandsLoading = {isBrandsLoading}
          />
        </div>
      </FilterCategory>
      <FilterCategory className="filter-by-brands">
        <FilterHead> Brands </FilterHead>
        {Brands.map((val: string) => {
          return (
            <FilterItem
              key={val}
              className="d-flex align-items-center justify-content-center gap-2"
            >
              <input
                checked={selectedBrands[val] || false}
                className="brand-check"
                type="checkbox"
                onChange={(e) => {
                  dispatcher(
                    changeSelectedBrands({
                      brands: { ...selectedBrands, [val]: e.target.checked },
                    })
                  );
                  filterByBrandsTrigger({
                    pageSize: pageSize,
                    selectedBrands: toBrandsNameArray({
                      ...selectedBrands,
                      [val]: e.target.checked,
                    }),
                    selectedCategory: selectedCategory,
                    sortOption: sortOption,
                  });
                }}
                name={val.replaceAll(" ", "")}
                id={val.replaceAll(" ", "")}
              />{" "}
              <label htmlFor={val.replaceAll(" ", "")}>{val}</label>{" "}
            </FilterItem>
          );
        })}
      </FilterCategory>
    </div>
  );
}

export default FiltersContainer;
