import React, { useEffect } from 'react'
import ContentContainer from './ContentContainer';
import HeroImg from './HeroImg';
import { useWindowSize } from '../../../Context/context';
let initial = true;

function CarouselItem({ className, data }) {
    let isMobile = useWindowSize()
    useEffect(() => {
        initial = false;
    }, [])
    let { preTitle, title, description, bottomChild, heroImg, imgHeight, imgWidth } = data
    return (
        <div className={"carousel-item " + className + (initial ? " " : " carousel-animation")}>
            <div className={"container  d-flex " + (isMobile ? " text-align-center flex-column align-items-center justify-content-end" : " align-items-end ")}>
                <ContentContainer preTitle={preTitle} title={title} description={description} bottomChild={bottomChild} className=' text-light content-container ' />
                {heroImg ? <HeroImg heroImg={heroImg} height={imgHeight} width={imgWidth} /> : <></>}
            </div>
        </div>
    )
}

export default CarouselItem
