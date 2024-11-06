import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import FilterItem from './FilterItem'
import './DesktopPaginationHeader.css'
function DesktopPaginationHeader() {
    const [sortOption, setSortOption] = useState("Popularity")
    const [sortOpen, setSortOpen] = useState(false)
    return (

        <div className="d-flex align-items-center   justify-content-between  w-100 ">
            <div className="headings-container px-3 d-flex flex-column align-items-start justify-content-center">
                <div className="fs-5 fw-600">
                    Men's Clothing
                </div>
                <div className="fs-7">SEO Text will be here</div>
            </div>

            <div className="sort-by-container dropdown-head w-30 px-3 gap-2 py-1 d-flex align-items-center justify-content-center">
                <div className="fs-7 fw-600 p-1">
                    Sort-by
                </div>
                <div onClick={() => {
                    setSortOpen(!sortOpen)
                }} className={'  filter-btn d-flex  w-40 gap-2  fs-7 fw-600 border border-rounded justify-content-between align-items-center p-3 ' + (sortOpen ? "sort-open" : "text-secondary")}>{sortOption} {sortOpen ? <FaChevronUp className='fs-7 fw-600' /> : <FaChevronDown className='fs-7 fw-600' />}</div>
                {sortOpen ?
                    <div className='d-flex flex-column p-3 gap-2 dropdown fs-7 fw-600 justify-content-between align-items-center ' >
                        <FilterItem className='sort-item' onClick={() => { setSortOption("Popularity"); setSortOpen(!sortOpen) }}>Popularity</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { setSortOption("Rating"); setSortOpen(!sortOpen) }}>Rating</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { setSortOption("Date Added"); setSortOpen(!sortOpen) }}>Date Added</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { setSortOption("Name"); setSortOpen(!sortOpen) }}>Name</FilterItem>
                    </div>
                    : <></>}
            </div>
        </div>

    )
}

export default DesktopPaginationHeader
