import React from 'react'
import ProductCard from './ProductCard'
import './BestSellerGrid.css'
import { giveData } from '../../../Pages/ProductsPage/data'
import { NavLink } from 'react-router-dom'
function BestSellerGrid({ className = " " }) {
    return (
        <div className={' bestseller-grid ' + className}>
            {
                giveData().slice(0, 8).map((val) => {
                    return (<NavLink to={`/home/products/${val.id}`} key={val.id}>
                        <ProductCard title={val.title} description={val.description} ogPrice={val.ogPrice} discountPrice={val.discountPrice} />
                    </NavLink>)
                })
            }
        </div>
    )
}

export default BestSellerGrid
