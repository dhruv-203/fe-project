import React, { ReactNode } from 'react'
import men from '../../../Assets/home-page/clothes-category/person-1.jpg'
import women from '../../../Assets/home-page/clothes-category/person-2.jpg'
import accessories from '../../../Assets/home-page/clothes-category/person-3.jpg'
import kids from '../../../Assets/home-page/clothes-category/person-4.jpg'
import './CategoryGrid.css'
function ImageTag({ children }: { children: ReactNode }) {
    return (
        <span className='img-tag px-3 py-2 fs-6 fw-700'>{children}</span>
    )
}
function CategoryGrid({ className = " " }: { className?: string }) {
    return (
        <div className='categoryGrid my-3 mx-auto'>
            <div className="men">
                <img src={men} alt="" />
                <ImageTag>MEN</ImageTag>
            </div>
            <div className="women">
                <img src={women} alt="" />
                <ImageTag>WOMEN</ImageTag>
            </div>
            <div className="accessories">
                <img src={accessories} alt="" />
                <ImageTag>ACCESSORIES</ImageTag>
            </div>
            <div className="kids">
                <img src={kids} alt="" />
                <ImageTag>KIDS</ImageTag>
            </div>
        </div>
    )
}

export default CategoryGrid
