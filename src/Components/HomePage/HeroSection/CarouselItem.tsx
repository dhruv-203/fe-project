import React, { ReactNode, useEffect } from 'react'
import ContentContainer from './ContentContainer';
import HeroImg from './HeroImg';
import { useWindowSize } from '../../../Context/context';
let initial = true;

interface CarouselItemProps {
    className?: string,
    content: {
        preTitle: string,
        title: string,
        description: string,
        bottomChild: ReactNode,
        heroImg?: string,
        imgHeight?: string,
        imgWidth?: string
    }
}

function CarouselItem({ className = " ", content }: CarouselItemProps) {
    let isMobile = (useWindowSize()).isMobile

    useEffect(() => {
        initial = false;
    }, [])
    let { preTitle, title, description, bottomChild, heroImg, imgHeight, imgWidth } = content
    return (
        <div className={"carousel-item " + className + (initial ? " " : " carousel-animation")}>
            <div className={"container  d-flex " + (isMobile ? " text-align-center flex-column align-items-center justify-content-end" : " align-items-end ")}>
                <ContentContainer preTitle={preTitle} title={title} description={description} bottomChild={bottomChild} className=' text-light content-container ' />
                {heroImg ? <HeroImg heroImg={heroImg} height={imgHeight ? imgHeight : " "} width={imgWidth ? imgWidth : " "} /> : <></>}
            </div>
        </div>
    )
}

export default CarouselItem
