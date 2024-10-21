import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import BrandLogo from '../../HomePage/Header/BrandLogo'
import { FaChevronRight } from "react-icons/fa6";
import { Fragment } from 'react';
import { useWindowSize } from '../../../Context/context';

function BreadCrumb({ title }) {
    const location = useLocation()
    const pathNames = location.pathname.split("/").filter((x) => x)
    return (
        <div className={"breadCrumbContainer justify-content-between d-flex align-items-center py-3 "}>
            <div className='container d-flex  justify-content-between align-items-center p-1 px-2'>
                {title ? <BrandLogo  >
                    {title}
                </BrandLogo> : <></>}
                <div className="crumbs d-flex justify-content-center align-items-center gap-2">
                    {
                        pathNames.map((val, ind, arr) => {
                            return (<Fragment key={ind}>
                                <div className={'crumb-item fs-7 p-1 text-dark fw-600 ' + (ind !== 0 ? " opacity-04 " : " ")}>
                                    <NavLink to={`/${pathNames.slice(0, ind + 1).join('/')}`}>{((val.charAt(0).toLocaleUpperCase()) + (val.slice(1)))}</NavLink>
                                </div>
                                {(ind !== (arr.length - 1)) ? <FaChevronRight className='opacity-04' /> : null}
                            </Fragment>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
