import React, { useEffect, useMemo, useState } from 'react'
import FilterItem from './FilterItem'
import FilterHead from './FilterHead'
import FilterCategory from './FilterCategory'
import { useWindowSize } from '../../../Context/context'
import Slider from './Slider'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, filterByBrands, filterByCategory } from '../../../Store'
import { Product } from '../../../Store/Slices/productsSlice'
function FiltersContainer() {
    const { isMobile } = (useWindowSize())
    const categoryList = useSelector<RootState, string[]>((state) => state.products.categoryList)
    const products = useSelector<RootState, Product[]>((state) => state.products.products)
    const dispatcher = useDispatch()
    const selectedCategory = useSelector<RootState, string>((state) => state.products.selectedCategory)
    const Brands = useMemo(() => {
        return products.reduce((acc, curr) => {
            if (!acc.includes(curr.brand) && curr.category === selectedCategory) {
                acc.push(curr.brand)
            }
            return acc
        }, [] as string[])
    }, [selectedCategory, products])

    useEffect(() => {
        dispatcher(filterByCategory(selectedCategory === "" ? categoryList[0] : selectedCategory))
    }, [categoryList])

    const selectedBrands = useSelector<RootState, { [key: string]: boolean }>((state) => state.products.selectedBrands)


    return (
        <div className={` filter-items-container  gap-3  d-flex ${isMobile ? "align-items-center w-100 my-4" : "align-items-start px-2 justify-self-start"} justify-content-center flex-column`}>
            {isMobile ? <></> : <FilterHead>Filters</FilterHead>}
            <FilterCategory className=' filter-by-category '>
                <FilterHead>
                    All Categories
                </FilterHead>
                {categoryList.map((val: string) => <FilterItem key={val} className={selectedCategory === val ? "text-primary" : "text-secondary"} onClick={() => {
                    dispatcher(filterByCategory(val))
                }}>{val}</FilterItem>)}
            </FilterCategory>
            <FilterCategory className='filter-by-price '>
                <FilterHead>Price</FilterHead>
                <div className="slider-container"><Slider /></div>
            </FilterCategory>
            <FilterCategory className='filter-by-brands'>
                <FilterHead>   Brands </FilterHead>
                {
                    Brands.map((val: string) => <FilterItem key={val} className='d-flex align-items-center justify-content-center gap-2'><input checked={selectedBrands[val] || false} className="brand-check" type="checkbox" onChange={(e) => {

                        dispatcher(filterByBrands({
                            brands: { ...selectedBrands, [val]: e.target.checked },
                        }))
                    }} name={val.replaceAll(" ", "")} id={val.replaceAll(" ", "")} /> <label htmlFor={val.replaceAll(" ", "")} >{val}</label> </FilterItem>)
                }
            </FilterCategory>
        </div>
    )
}

export default FiltersContainer
