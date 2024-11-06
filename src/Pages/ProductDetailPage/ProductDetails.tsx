import { useParams } from 'react-router-dom'
import BreadCrumb from '../../Components/ProductPage/TopSection/BreadCrumb'
import DetailsSection from '../../Components/ProductDetailsPage/DetailsSection'
import AdditionalInformationSection from '../../Components/ProductDetailsPage/AdditionalInformationSection'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import BestsellerProductsSection from '../../Components/ProductDetailsPage/BestsellerProductsSection'
import { giveData } from '../ProductsPage/data2'
function ProductDetails() {
    const { productId } = useParams()

    const data = giveData().find((val) => val.id === productId)
    return (
        <div className='container'>
            <BreadCrumb title={""} />
            <DetailsSection data={data ? data : {
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
            }} />
            <AdditionalInformationSection reviews={data?.reviews} description={data?.longDescription} />
            <BestsellerProductsSection />
            <BrandLogosContainer />

        </div>
    )
}

export default ProductDetails
