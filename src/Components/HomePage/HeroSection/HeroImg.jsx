import React from 'react'

function HeroImg({ heroImg, height, width, className = "" }) {
    return (
        <div className={'image-container ' + className}>
            <img src={heroImg} height={height} width={width} alt="" />
        </div>
    )
}

export default HeroImg