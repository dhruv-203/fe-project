import React from "react";
import ProductCard from "./ProductCard";
import { useWindowSize } from "../../Context/context";
import AdditionalInfoTitle from "./AdditionalInfoTitle";
function BestsellerProductsSection() {
    return (
        <>
            <div className="best-seller-section my-4  d-flex flex-column align-items-start justify-content-center gap-4">
                <AdditionalInfoTitle className={"px-3"}>BESTSELLER PRODUCTS</AdditionalInfoTitle>
                <div className="prod-cont flex-wrap d-flex align-items-center justify-content-center gap-3">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default BestsellerProductsSection
