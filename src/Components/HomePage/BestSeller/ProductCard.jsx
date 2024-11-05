import React from 'react'
import SectionTitle from '../EditorPick/SectionTitle'
import SectionDescription from '../EditorPick/SectionDescription'
import './ProductCard.css'
import CircleBtn from '../../ProductDetailsPage/CircleBtn'
import defaultImg from '../../../Assets/home-page/featured-products/person-1.jpg'
function ProductCard({ url = defaultImg, title = "Graphic Design", description = "English Department", ogPrice = "16.48", discountPrice = "6.48", colors = ["#23A6F0",
    "#2DC071",
    "#E77C40",
    "#252B42"] }) {
    return (
        <div className="card">
            <div className="model-photo" style={{ "backgroundImage": `url(${url})` }} id="person-1"></div>
            <SectionTitle fontSize={"fs-6"} fontColor={"text-dark"} className={"fw-700 d-flex align-items-center justify-content-center"}>{title}</SectionTitle>
            <SectionDescription fontColor={"text-dark"} className={"text-align-center d-flex align-items-center justify-content-center"}>{description}</SectionDescription>
            <div className="price">${ogPrice} <span className="green">${discountPrice}&nbsp;&nbsp;</span></div>
            <div className="color-pallet">
                {colors.map((val) => {
                    return <CircleBtn className={'border border-2 '} key={val} width={"30px"} height={"30px"} bgColor={val} />
                })}
            </div>
        </div>
    )
}

export default ProductCard
