import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import FilterItem from './FilterItem'
import './DesktopPaginationHeader.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, sortBy } from '../../../Store'
import { SortOptions } from '../../../utils'
function DesktopPaginationHeader() {
    // const [sortOption, setSortOption] = useState("Popularity")
    const sortOption: SortOptions = useSelector<RootState, SortOptions>((state) => state.products.sortOption)
    const [sortOpen, setSortOpen] = useState(false)
    const selectedCategory = useSelector<RootState, string>((state) => state.products.selectedCategory)
    const dispatcher = useDispatch()
    return (

        <div className="d-flex align-items-center   justify-content-between  w-100 ">
            <div className="headings-container px-3 d-flex flex-column align-items-start justify-content-center">
                <div className="fs-5 fw-600">
                    {selectedCategory}
                </div>
                <div className="fs-7">SEO Text will be here</div>
            </div>

            <div className="sort-by-container dropdown-head w-40 px-3 gap-2 py-1 d-flex align-items-center justify-content-center">
                <div className="fs-7 fw-600 p-1">
                    Sort-by
                </div>
                <div onClick={() => {
                    setSortOpen(!sortOpen)
                }} className={'  filter-btn d-flex  w-40 gap-2  fs-7 fw-600 border border-rounded justify-content-between align-items-center p-3 ' + (sortOpen ? "sort-open" : "text-secondary")}>{sortOption} {sortOpen ? <FaChevronUp className='fs-7 fw-600' /> : <FaChevronDown className='fs-7 fw-600' />}</div>
                {sortOpen ?
                    <div className='d-flex flex-column p-3 gap-2 dropdown fs-7 fw-600 justify-content-between align-items-center ' >
                        <FilterItem className='sort-item' onClick={() => { dispatcher(sortBy(SortOptions.Rating)); setSortOpen(!sortOpen) }}>Rating</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { dispatcher(sortBy(SortOptions.Name)); setSortOpen(!sortOpen) }}>Name</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { dispatcher(sortBy(SortOptions.HighestPrice)); setSortOpen(!sortOpen) }}>Highest Price</FilterItem>
                        <FilterItem className='sort-item' onClick={() => { dispatcher(sortBy(SortOptions.LowestPrice)); setSortOpen(!sortOpen) }}>Lowest Price</FilterItem>
                    </div>
                    : <></>}
            </div>
        </div>

    )
}

export default DesktopPaginationHeader
