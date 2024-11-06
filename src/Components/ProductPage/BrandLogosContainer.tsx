import React, { ReactNode } from 'react'
import logo1 from '../../Assets/product-page/brandsLogos/hooli.png'
import logo2 from '../../Assets/product-page/brandsLogos/lyft.png'
import logo3 from '../../Assets/product-page/brandsLogos/leaf.png'
import logo4 from '../../Assets/product-page/brandsLogos/stripe.png'
import logo5 from '../../Assets/product-page/brandsLogos/aws.png'
import logo6 from '../../Assets/product-page/brandsLogos/reddit.png'
import './BrandLogosContainer.css'

interface BrandLogosProps {
    className?: string,
    children: ReactNode
}

function BrandLogos({ className = " ", children }: BrandLogosProps) {
    return (
        <div className={'brand-logo px-3 py-5 ' + (className)}>
            {children}
        </div>
    )
}


function BrandLogosContainer() {
    return (
        <div className="container brand-logos-container w-100  flex-wrap d-flex align-items-center justify-content-around">
            <BrandLogos>
                <img src={logo1} alt="" />
            </BrandLogos>
            <BrandLogos>
                <img src={logo2} alt="" />
            </BrandLogos>
            <BrandLogos>
                <img src={logo3} alt="" />
            </BrandLogos>
            <BrandLogos>
                <img src={logo4} alt="" />
            </BrandLogos>
            <BrandLogos>
                <img src={logo5} alt="" />
            </BrandLogos>
            <BrandLogos className='reddit'>
                <img src={logo6} alt="" />
            </BrandLogos>
        </div>
    )
}

export default BrandLogosContainer
