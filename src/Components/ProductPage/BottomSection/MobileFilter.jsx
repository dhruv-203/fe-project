import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import FilterHead from './FilterHead';
import FilterItem from './FilterItem';
import FilterCategory from './FilterCategory';
import Slider from './Slider';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import FiltersContainer from './FiltersContainer';

import './MobileFilter.css'
function MobileFilter() {
    const [filterOpen, setFilterOpen] = useState(false)
    const [sortOpen, setSortOpen] = useState(false)
    return (
        <>
            <div className="d-flex w-100 align-items-start justify-content-center gap-3">
                <div className='filter-btn d-flex  border border-rounded fs-7 fw-600 justify-content-between align-items-center px-2 py-2 ' onClick={() => {
                    if (sortOpen) {
                        setSortOpen(!sortOpen)
                    }
                    setFilterOpen(!filterOpen)
                }}>
                    Filter
                    <TbMenuDeep className='fs-7 fw-600' />
                </div>
                <div className='filter-btn d-flex flex-column  fs-7 fw-600 border border-rounded justify-content-between align-items-center px-3 py-2' >
                    <div className="d-flex w-100 justify-content-between align-items-center" onClick={() => {
                        if (filterOpen) {
                            setFilterOpen(!filterOpen)
                        }
                        setSortOpen(!sortOpen)
                    }}>
                        Sort by
                        {sortOpen ? <FaChevronUp className='fs-7 fw-600' /> : <FaChevronDown className='fs-7 fw-600' />}
                    </div>
                    {sortOpen ? <div className="mt-3 d-flex flex-column align-items-center justify-content-center gap-2">
                        <FilterItem className='text-secondary'>Popularity</FilterItem>
                        <FilterItem className='text-secondary'>Rating</FilterItem>
                        <FilterItem className='text-secondary'>Date Added</FilterItem>
                        <FilterItem className='text-secondary'>Name</FilterItem>
                    </div> : <></>}
                </div>
            </div>
            {filterOpen ? <FiltersContainer /> : <></>}
        </>
    )
}

export default MobileFilter
