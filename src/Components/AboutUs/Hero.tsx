import React from 'react'
import ContentContainer from '../HomePage/HeroSection/ContentContainer'
import heroImg from '../../Assets/AboutUs/hero.png'
import './Hero.css'
import { useWindowSize } from '../../Context/context'

interface HeroProps {
    className?: string,
    preTitle: string,
    title: string,
    description: string,
    bottomChild: JSX.Element
}

function Hero({ className = " ", preTitle, title, description, bottomChild }: HeroProps) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className={'hero-section mx-auto my-3 d-flex justify-content-center gap-4 align-items-center ' + (isMobile ? "flex-column" : " ")}>
            <div className="abt-content-container my-auto ">
                <ContentContainer
                    preTitle="ABOUT COMPANY"
                    title="ABOUT US"
                    description="We know how large objects will act, but things on a small scale"
                    bottomChild={<><div className="px-3 py-2 bg-primary text-light fs-7 fw-600 rounded">Get Quote Now</div></>}
                    preTitleFontSize='fs-7'
                    padding={isMobile ? ' px-5 ' : " "}
                    className='text-align-center'
                />
            </div>
            <div className="abt-hero-img-container">
                <img src={heroImg} width={"100%"} height={"100%"} alt="" />
            </div>
        </div>
    )
}

export default Hero
