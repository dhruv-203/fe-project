import React from 'react'
import SectionTitle from '../HomePage/EditorPick/SectionTitle'
import SectionDescription from '../HomePage/EditorPick/SectionDescription'
import '../../Components/HomePage/BestSeller/ProductCard.css'
import './ProductCard.css'

interface ProductCardProps {
    url: string,
    title: string,
    description: string,
    ogPrice: number,
    discountPrice: number
}

function ProductCard({ url, title, description, ogPrice, discountPrice }: ProductCardProps) {
    return (
        <div className="card prod-det-card">
            <div className="model-photo w-100" style={{ "backgroundImage": `url(${url})` }} id="person-1"></div>
            <SectionTitle fontSize={"fs-6"} fontColor={"text-dark"} className={"fw-700 d-flex align-items-center justify-content-center"}>{title}</SectionTitle>
            <SectionDescription fontColor={"text-dark"} className={"text-align-center d-flex align-items-center justify-content-center"}>{description}</SectionDescription>
            <div className="price">${ogPrice} <span className="green">${discountPrice}&nbsp;&nbsp;</span></div>

        </div>
    )
}

export default ProductCard
