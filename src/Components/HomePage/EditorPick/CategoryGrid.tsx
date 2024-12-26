import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../Store";
import { useLazyByCategoryQuery } from "../../../Store/Slices/productsApi";
import { Category } from "../../../Store/Types";
import { SortOptions } from "../../../utils";
import "./CategoryGrid.css";
function ImageTag({ children }: { children: ReactNode }) {
  return <span className="img-tag p-2 fs-6 fw-700">{children}</span>;
}

function CategoryGrid({ className = " " }: { className?: string }) {
  const categoryList = useSelector<RootState, Category[]>(
    (state) => state.products.categoryList
  );

  const [categoryTrigger] = useLazyByCategoryQuery();
  function handleClick(name: string) {
    categoryTrigger({
      selectedCategory: name,
      pageSize: 6,
      sortOption: SortOptions.Name,
    });
  }
  return (
    <div className="categoryGrid my-3 mx-auto">
      <NavLink
        to={"/home/products"}
        onClick={() => handleClick(categoryList[0].name)}
        className="men position-relative"
      >
        <img src={categoryList[0].img} alt="" />
        <ImageTag>{categoryList[0].name}</ImageTag>
      </NavLink>
      <NavLink
        to={"/home/products"}
        onClick={() => handleClick(categoryList[1].name)}
        className="women position-relative"
      >
        <img src={categoryList[1].img} alt="" />
        <ImageTag>{categoryList[1].name}</ImageTag>
      </NavLink>

      <NavLink
        to={"/home/products"}
        onClick={() => handleClick(categoryList[2].name)}
        className="accessories position-relative"
      >
        <img src={categoryList[2].img} alt="" />
        <ImageTag>{categoryList[2].name}</ImageTag>
      </NavLink>

      <NavLink
        to={"/home/products"}
        onClick={() => handleClick(categoryList[3].name)}
        className="kids position-relative"
      >
        <img src={categoryList[3].img} alt="" />
        <ImageTag>{categoryList[3].name}</ImageTag>
      </NavLink>
    </div>
  );
}

export default CategoryGrid;
