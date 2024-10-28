import React from "react";
import ProductCard from "./ProductCard";
import { giveData } from "../../Pages/ProductsPage/data";
import { NavLink } from "react-router-dom";
import AdditionalInfoTitle from "./AdditionalInfoTitle";
function BestsellerProductsSection() {
    return (
        <>
            <div className="best-seller-section my-4  d-flex flex-column align-items-start justify-content-center gap-4">
                <AdditionalInfoTitle className={"px-3"}>BESTSELLER PRODUCTS</AdditionalInfoTitle>
                <div className="prod-cont flex-wrap d-flex align-items-center justify-content-center gap-3">
                    {
                        giveData().slice(0, 8).map((val) => {
                            return (<NavLink to={`/home/products/${val.id}`} key={val.id}>
                                <ProductCard title={val.title} description={val.description} ogPrice={val.ogPrice} discountPrice={val.discountPrice} />
                            </NavLink>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BestsellerProductsSection
