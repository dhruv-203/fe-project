import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import DetailsSection from '../../Components/ProductDetailsPage/DetailsSection'
import AdditionalInformationSection from '../../Components/ProductDetailsPage/AdditionalInformationSection'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import BestsellerProductsSection from '../../Components/ProductDetailsPage/BestsellerProductsSection'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store'
import { Product } from '../../Store/Slices/productsSlice'
import { useEffect, useState } from 'react'
function ProductDetails() {
    const { productId } = useParams()

    let data = useSelector<RootState, Product[]>((state) => state.products.products).find((val) => val.id === productId)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [data])

    // Optional: Add loading state handling
    if (loading && (!data)) {
        return <div className="container mt-5">Loading products...</div>
    }

    return (
        <div className='container'>
            <BreadCrumb title={""} />
            {data ? <DetailsSection data={data ? data : {
                id: " ",
                title: " ",
                shortDescription: " ",
                discountedPrice: 0,
                originalPrice: 0,
                colors: [" "],
                category: " ",
                brand: " ",
                displayImage: " ",
                ratings: 0,
                reviews: [
                    " "
                ],
                longDescription: " ",
                additionalImages: [
                    " ",
                    " "
                ]
            }} /> : <div className="container mt-5">No Details Available</div>}
            <AdditionalInformationSection reviews={data?.reviews} description={data?.longDescription} />
            <BestsellerProductsSection />
            <BrandLogosContainer />

        </div>
    )
}

export default ProductDetails
