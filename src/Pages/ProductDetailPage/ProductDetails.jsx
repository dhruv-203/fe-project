import React from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import product1 from '../../Assets/product-page/ProductsDetails/Product-1.png'
import DetailsSection from '../../Components/ProductDetailsPage/DetailsSection'
import product2 from '../../Assets/product-page/ProductsDetails/Product-2.png'
import AdditionalInformationSection from '../../Components/ProductDetailsPage/AdditionalInformationSection'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import BestsellerProductsSection from '../../Components/ProductDetailsPage/BestsellerProductsSection'
function ProductDetails() {
    const { productId } = useParams()

    const data = {
        productImages: [
            product1,
            product2
        ],
        productDetails: {
            id: productId,
            title: "Floating Phone",
            rating: 4,
            reviewCount: 10,
            price: 1139.33,
            availability: true,
            productDescription: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
            colors: [
                "#23A6F0",
                "#2DC071",
                "#E77C40",
                "#252B42"
            ]
        }
    }

    return (
        <div className='container'>
            <BreadCrumb title={""} />
            <DetailsSection data={data} />
            <AdditionalInformationSection />
            <BestsellerProductsSection />
            <BrandLogosContainer />

        </div>
    )
}

export default ProductDetails
