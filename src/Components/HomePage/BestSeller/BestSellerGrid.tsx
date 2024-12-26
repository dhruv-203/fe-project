import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../Store";
import { Product } from "../../../Store/Types";
import "./BestSellerGrid.css";
import ProductCard from "./ProductCard";

function BestSellerGrid({ className = " " }) {
  const bestsellerProducts: Product[] =
    useSelector<RootState, Product[]>(
      (state) => state.products.bestsellerProducts
    ) ?? [];
  return (
    <div className={" bestseller-grid " + className}>
      {bestsellerProducts.length < 7
        ? bestsellerProducts.map((val) => {
            return (
              <NavLink to={`/home/products/${val.id}`} key={val.id}>
                <ProductCard
                  url={val.displayImage}
                  title={val.title}
                  description={val.shortDescription}
                  ogPrice={val.originalPrice}
                  discountPrice={val.discountedPrice}
                  colors={val.colors}
                />
              </NavLink>
            );
          })
        : bestsellerProducts.slice(0, 8).map((val) => {
            return (
              <NavLink to={`/home/products/${val.id}`} key={val.id}>
                <ProductCard
                  url={val.displayImage}
                  title={val.title}
                  description={val.shortDescription}
                  ogPrice={val.originalPrice}
                  discountPrice={val.discountedPrice}
                  colors={val.colors}
                />
              </NavLink>
            );
          })}
    </div>
  );
}

export default BestSellerGrid;
