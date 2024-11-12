import React from "react";
import ProductCard from "./ProductCard";
import { giveData } from "../../Pages/ProductsPage/data2";
import { NavLink } from "react-router-dom";
import AdditionalInfoTitle from "./AdditionalInfoTitle";
import './BestsellerProductsSection.css'
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { Product } from "../../Store/Slices/productsSlice";

function BestsellerProductsSection() {
    const bestsellerProducts: Product[] = useSelector<RootState, Product[]>((state) => state.products.products) ?? []

    return (
        <>
            <div className="best-seller-section my-4  d-flex flex-column align-items-start justify-content-center gap-4">
                <AdditionalInfoTitle className={"px-3"}>BESTSELLER PRODUCTS</AdditionalInfoTitle>
                <div className="prod-cont align-self-center ">
                    {
                        bestsellerProducts.length < 7 ? bestsellerProducts.map((val) => {
                            return (<NavLink to={`/home/products/${val.id}`} key={val.id}>
                                <ProductCard url={val.displayImage} title={val.title} description={val.shortDescription} ogPrice={val.originalPrice} discountPrice={val.discountedPrice} />
                            </NavLink>)
                        }) : bestsellerProducts.slice(0, 8).map((val) => {
                            return (<NavLink to={`/home/products/${val.id}`} key={val.id}>
                                <ProductCard url={val.displayImage} title={val.title} description={val.shortDescription} ogPrice={val.originalPrice} discountPrice={val.discountedPrice} />
                            </NavLink>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BestsellerProductsSection
