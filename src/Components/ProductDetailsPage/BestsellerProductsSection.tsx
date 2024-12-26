import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { NavLink } from "react-router-dom";
import { useLazySuggestedProductsQuery } from "../../Store/Slices/productsApi";
import { Product } from "../../Store/Types";
import { toastify } from "../../utils";
import AdditionalInfoTitle from "./AdditionalInfoTitle";
import "./BestsellerProductsSection.css";
import ProductCard from "./ProductCard";

function BestsellerProductsSection({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const [trigger, { isFetching }] = useLazySuggestedProductsQuery();
  let [bestsellerProducts, setBestsellerProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getSuggest = async () => {
      try {
        const response = await trigger({ category, productId: id }).unwrap();
        setBestsellerProducts(response.data.suggestedProducts);
      } catch (error) {
        console.log(error);
        toastify("Error fetching bestseller products", "error");
      }
    };
    if (category && id) {
      console.log(category, id);
      getSuggest();
    }
  }, [category, id]);

  // FIX this bestseller issue

  return (
    <>
      <div className="best-seller-section my-4  d-flex flex-column align-items-start justify-content-center gap-4">
        <AdditionalInfoTitle className={"px-3"}>
          BESTSELLER PRODUCTS
        </AdditionalInfoTitle>
        <div className="prod-cont align-self-center ">
          {bestsellerProducts.length === 0 ? (
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
            bestsellerProducts.slice(0, 8).map((val) => {
              return (
                <NavLink to={`/home/products/${val.id}`} key={val.id}>
                  <ProductCard
                    url={val.displayImage}
                    title={val.title}
                    description={val.shortDescription}
                    ogPrice={val.originalPrice}
                    discountPrice={val.discountedPrice}
                  />
                </NavLink>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default BestsellerProductsSection;
