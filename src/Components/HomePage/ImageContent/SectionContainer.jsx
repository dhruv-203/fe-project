import React from 'react'
import ContentContainer from '../HeroSection/ContentContainer'
import BtnContainer from '../HeroSection/BtnContainer'
import Btn from '../HeroSection/Btn'
import './SectionContainer.css'
import { useWindowSize } from '../../../Context/context'

function SectionContainer({ className = " ", img }) {
    let isMobile = useWindowSize()
    console.log(img)
    return (
        <div className={"d-flex justify-content-center align-items-center gap-3 " + " " + className + (isMobile ? " flex-column-reverse " : " ")}>
            <div className="img-container">
                <img src={img} alt="" />
            </div>

            <div className="contentContainer ">
                <ContentContainer
                    className=' gap-5 '
                    preTitle={"SUMMER 2020"}
                    preTitleFontSize=' fs-7 '
                    preTitleOpacity=' opacity-05 '
                    title={"Part of the Neural Universe"}
                    titleFontSize=' fs-1 '
                    description={"We know how large objects will act, but things on a small scale."}
                    descriptionOpacity=' opacity-06'
                    bottomChild={
                        <BtnContainer className={" gap-3 "}>
                            <Btn className={(isMobile ? "fs-7" : "fs-6") + " text-light bg-success rounded fw-700"}>
                                ADD TO CART
                            </Btn>
                            <Btn className={(isMobile ? "fs-7" : "fs-6") + " rounded fw-700 text-success border border-success"}>
                                Read More
                            </Btn>
                        </BtnContainer>
                    }
                />
            </div>
        </div>
    )
}

export default SectionContainer
