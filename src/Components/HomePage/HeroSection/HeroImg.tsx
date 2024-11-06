import React from 'react'

interface HeroImgProps {
    heroImg: string,
    height: string,
    width: string,
    className?: string
}

function HeroImg({ heroImg, height, width, className = " " }: HeroImgProps) {
    return (
        <div className={'image-container ' + className}>
            <img src={heroImg} height={height} width={width} alt="" />
        </div>
    )
}

export default HeroImg