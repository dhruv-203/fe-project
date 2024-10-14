import React from 'react'
import SectionTitle from '../EditorPick/SectionTitle'
import SectionDescription from '../EditorPick/SectionDescription'
import './ProductCard.css'
function ProductCard() {
    return (
        <div className="card">
            <div className="model-photo" id="person-1"></div>
            <SectionTitle fontSize={"fs-6"} fontColor={"text-dark"} className={"fw-700 d-flex align-items-center justify-content-center"}>Graphic Design</SectionTitle>
            <SectionDescription fontColor={"text-dark"} className={"text-align-center d-flex align-items-center justify-content-center"}>English Department</SectionDescription>
            <div className="price">$16.48 <span className="green">$6.48&nbsp;&nbsp;</span></div>
            <div className="color-pallet">
                <div className="color-circle blue-bg"></div>
                <div className="color-circle green-bg"></div>
                <div className="color-circle orange-bg"></div>
                <div className="color-circle indigo-bg"></div>
            </div>
        </div>
    )
}

export default ProductCard
