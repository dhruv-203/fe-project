import React from 'react'
import { useWindowSize } from '../../Context/context'
import ContentContainer from '../../Components/HomePage/HeroSection/ContentContainer'
import Btn from '../../Components/HomePage/HeroSection/Btn'
import './ContactUs.css'
function ContactUs({ img }) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className='d-flex  bg-primary justify-content-center align-items-stretch gap-0 '>
            <div className="left-contact-child mx-auto my-auto">
                <ContentContainer
                    preTitle="WORK WITH US"
                    title="Now Let's Grow Yours"
                    description="The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th "
                    bottomChild={<Btn className={(isMobile ? "fs-7" : "fs-6") + " rounded fw-700 text-light border border-light"}>
                        Button
                    </Btn>}
                    preTitleFontSize='fs-7'
                    padding={isMobile ? ' px-5 ' : " "}
                    className=' text-light p-5 '
                />
            </div>

            <div className="right-contact-div">
                <img src={img} width={"100%"} height={"auto"} alt="" />
            </div>

        </div>
    )
}

export default ContactUs
