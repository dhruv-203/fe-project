import ProductCard from './ProductCard'
import './BestSellerGrid.css'
import { giveData } from '../../../Pages/ProductsPage/data2'
import { NavLink } from 'react-router-dom'
function BestSellerGrid({ className = " " }) {
    return (
        <div className={' bestseller-grid ' + className}>
            {
                giveData().slice(0, 8).map((val) => {
                    return (<NavLink to={`/home/products/${val.id}`} key={val.id}>
                        <ProductCard url={val.displayImage} title={val.title} description={val.shortDescription} ogPrice={val.originalPrice} discountPrice={val.discountedPrice} colors={val.colors} />
                    </NavLink>)
                })
            }
        </div>
    )
}

export default BestSellerGrid
