import React from 'react'
import FilterItem from './FilterItem'
import FilterHead from './FilterHead'
import FilterCategory from './FilterCategory'
import { useWindowSize } from '../../../Context/context'
import Slider from './Slider'
function FiltersContainer() {
    const isMobile = useWindowSize();

    return (

        <div className={` filter-items-container  gap-3  d-flex ${isMobile ? "align-items-center w-100 my-4" : "align-items-start px-2 justify-self-start"} justify-content-center flex-column`}>
            {isMobile ? <></> : <FilterHead>Filters</FilterHead>}
            <FilterCategory className=' filter-by-category '>
                <FilterHead>
                    All Categories
                </FilterHead>
                <FilterItem className={"text-secondary"}>All Men's Clothing</FilterItem>
                <FilterItem className={"text-secondary"}>Women's Clothing</FilterItem>
                <FilterItem className={"text-secondary"}>Footwear</FilterItem>
                <FilterItem className={"text-secondary"}>Watches</FilterItem>
                <FilterItem className={"text-secondary"}>Beauty</FilterItem>
                <FilterItem className={"text-secondary"}>Kid's Clothing</FilterItem>
                <FilterItem className={"text-secondary"}>Hand bags</FilterItem>
                <FilterItem className={"text-secondary"}>Jwellery</FilterItem>
            </FilterCategory>
            <FilterCategory className='filter-by-price '>
                <FilterHead>Price</FilterHead>
                <div className="slider-container"><Slider /></div>
            </FilterCategory>
            <FilterCategory className='filter-by-brands'>
                <FilterHead>   Brands </FilterHead>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'><input className="brand-check" type="checkbox" name="All" id="All" /> <label htmlFor="All" >All</label> </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'><input className="brand-check" type="checkbox" name="Zara" id="Zara" /> <label htmlFor="Zara" >Zara</label> </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'><input className="brand-check" type="checkbox" name="Levi's" id="Levi's" /> <label htmlFor="Levi's" >Levi's</label> </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'><input className="brand-check" type="checkbox" name="Adidas" id="Adidas" /> <label htmlFor="Adidas" >Adidas</label> </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'><input className="brand-check" type="checkbox" name="peterEngland" id="peterEngland" /> <label htmlFor="peterEngland" >Peter England</label> </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'>
                    <input className="brand-check" type="checkbox" name="allenSolley" id="allenSolley" />
                    <label htmlFor="allenSolley" >Allen Solley</label>
                </FilterItem>
                <FilterItem className='d-flex align-items-center justify-content-center gap-2'>
                    <input className="brand-check" type="checkbox" name="fabIndia" id="fabIndia" />
                    <label htmlFor="fabIndia" >Fabindia</label>
                </FilterItem>
            </FilterCategory>
        </div>
    )
}

export default FiltersContainer
