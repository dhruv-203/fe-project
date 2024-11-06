import "./Slider.css"; // This is for our custom styles
import React, { useState } from "react";
const Slider = () => {
    const [minValue, setMinValue] = useState(12);
    const [maxValue, setMaxValue] = useState(425);
    const minLimit = 12;
    const maxLimit = 425;

    // Handle change for the min handle
    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (value < maxValue) {
            setMinValue(value);
        }
    };

    // Handle change for the max handle
    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (value > minValue) {
            setMaxValue(value);
        }
    };



    return (
        <>
            <div className="slider">
                <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={minValue}
                    onChange={handleMinChange}
                    className="slider-thumb slider-thumb-left"
                />
                <input
                    type="range"
                    min={minLimit}
                    max={maxLimit}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="slider-thumb slider-thumb-right"
                />
                <div className="slider-track"></div>
                <div
                    className="slider-range"
                    style={{
                        left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
                        right: `${100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100
                            }%`,
                    }}
                ></div>
            </div>
            <div className="slider-values">
                <span>${minValue}</span>
                <span>${maxValue}</span>
            </div>

        </>
    );
};

export default Slider;