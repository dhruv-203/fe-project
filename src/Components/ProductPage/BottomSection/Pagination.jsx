import React, { useEffect } from 'react'
import { useState, useMemo } from 'react'
import { useWindowSize } from '../../../Context/context'
import './Pagination.css'


// Original code written by me 
/*
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useWindowSize } from '../../../Context/context'
import './Pagination.css'
// this data expects an array of jsx elements to display in pagintion 
function Pagination({ data = [] }) {
    const isMobile = useWindowSize()
    const [maxDisplay, setMaxDisplay] = useState(9)
    const [currIndex, setCurrIndex] = useState(1)
    let [noPages, setNoPages] = useState(Math.ceil((data.length / maxDisplay)))
    const [pages, setPages] = useState([1, 2, 3])

    const handlePrev = () => {
        if (currIndex !== 1) {
            if (currIndex === pages[0]) {
                setPages([currIndex - 1, currIndex, currIndex + 1])
            }
            setCurrIndex(currIndex - 1)
        }
    }

    const handleNext = () => {
        if (currIndex !== noPages) {
            if (currIndex === pages[2]) {
                setPages([currIndex - 1, currIndex, currIndex + 1])
            }
            setCurrIndex(currIndex + 1)
        }
    }

    useEffect(() => {
        if (isMobile) {
            setMaxDisplay(5)
            setNoPages(Math.ceil((data.length / 5)))
        } else {
            setMaxDisplay(9)
            setNoPages(Math.ceil((data.length / 9)))
        }
        setCurrIndex(1) // reseting page index 
        setPages([1, 2, 3]) //reseting pages container
    }, [isMobile])

    return (
        <div className="pagination-container  gap-3 d-flex justify-content-center align-items-center flex-column">
            <div className="display-grid d-flex flex-wrap justify-content-center gap-4 align-items-center p-2">

                {
                    data.slice(((currIndex - 1) * maxDisplay), ((currIndex * maxDisplay)))

                }
            </div>
            <div className="numberedGrid  d-flex align-items-stretch p-3  justify-content-center">
                <div className={"number-items fs-7 text-align-center next  " + (currIndex === 1 ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handlePrev}>Prev</div>
                <div className={"number-items   fs-7  text-align-center " + (pages[0] === currIndex ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[0])}>{pages[0]}</div>
                <div className={"number-items   fs-7  text-align-center " + (pages[1] === currIndex ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[1])}>{pages[1]}</div>
                <div className={"number-items  fs-7  text-align-center " + (pages[2] === currIndex ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={() => setCurrIndex(pages[2])}>{pages[2]}</div>
                <div className={"number-items fs-7  text-align-center prev  " + (currIndex === noPages ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handleNext}>Next</div>
            </div>
        </div>
    )
}

export default Pagination

*/

//Code optimised by gpt by removing some extra states that i created 
// this data expects an array of jsx elements to display in pagintion 
function Pagination({ data = [] }) {
    const isMobile = useWindowSize()
    const [maxDisplay, setMaxDisplay] = useState(9)
    const [currIndex, setCurrIndex] = useState(1)
    let noPages = Math.ceil((data.length / maxDisplay))
    const pages = useMemo(() => {
        if (currIndex === 1) return [1, 2, 3];
        if (currIndex === noPages) return [noPages - 2, noPages - 1, noPages];
        return [currIndex - 1, currIndex, currIndex + 1];
    }, [currIndex, noPages])

    const handlePrev = () => {
        if (currIndex > 1) setCurrIndex(currIndex - 1);
    }

    const handleNext = () => {
        if (currIndex < noPages) setCurrIndex(currIndex + 1);
    }

    useEffect(() => {
        const newMaxDisplay = isMobile ? 5 : 9;
        setMaxDisplay(newMaxDisplay);

        const updatedNoPages = Math.ceil(data.length / newMaxDisplay);

        // If the current page index exceeds the new noPages, reset it to 1
        if (currIndex > updatedNoPages) {
            setCurrIndex(1);
        }
    }, [isMobile, data.length]);

    // Use useMemo to only slice the data when needed
    const paginatedData = useMemo(() => {
        const start = (currIndex - 1) * maxDisplay;
        return data.slice(start, start + maxDisplay);
    }, [currIndex, maxDisplay, data]);

    return (
        <div className="pagination-container  gap-3 d-flex justify-content-center align-items-center flex-column">
            <div className="display-grid d-flex flex-wrap justify-content-center gap-4 align-items-center p-2">

                {
                    paginatedData

                }
            </div>
            <div className="numberedGrid  d-flex align-items-stretch p-3  justify-content-center">
                <div className={"number-items fs-7 text-align-center next  " + (currIndex === 1 ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handlePrev}>Prev</div>
                {pages.map(page => (
                    <div
                        key={page}
                        className={"number-items fs-7 text-align-center " + (page === currIndex ? "bg-primary text-light" : "bg-light text-primary") + (isMobile ? " p-3 " : " p-4 ")}
                        onClick={() => setCurrIndex(page)}
                    >
                        {page}
                    </div>
                ))}
                <div className={"number-items fs-7  text-align-center prev  " + (currIndex === noPages ? "text-secondary" : "text-primary") + (isMobile ? " p-3 " : " p-4 ")} onClick={handleNext}>Next</div>
            </div>
        </div>
    )
}

export default Pagination
