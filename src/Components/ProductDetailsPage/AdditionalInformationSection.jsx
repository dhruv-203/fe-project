import React from 'react'
import additional1 from '../../Assets/product-page/ProductsDetails/additionalinformation.jpg'
import CollapsingDiv from './CollapsingDiv'
import AdditionalInfoTitle from './AdditionalInfoTitle'
import { useState } from 'react'
import './AdditionalInformationSection.css'
import { useWindowSize } from '../../Context/context'

// a component to be used internally 
function AdditionalInformation() {
    let isMobile = (useWindowSize()).isMobile

    return (
        <>
            <div className="add-info-image-container mx-auto"><img src={additional1} height={"auto"} style={{ "aspectRatio": "3/4" }} alt="" /></div>
            <div className={"additional-info-1   d-flex flex-column  justify-content-center gap-3 " + (isMobile ? "align-items-start" : "align-items-start")}>
                <AdditionalInfoTitle className={"px-3"}>the quick fox jumps over</AdditionalInfoTitle>
                <span className="fs-7 text-secondary px-3">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </span>
                <span className="fs-7 text-secondary px-3">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </span>
                <span className="fs-7 text-secondary px-3">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </span>
            </div>
            <div className={"additional-info-2 gap-3  d-flex justify-content-start " + (isMobile ? "align-items-center" : "align-items-start")} >
                <div className="item px-3 d-flex flex-column align-items-start justify-content-center gap-2">
                    <AdditionalInfoTitle className={" mb-3  "}>the quick fox jumps over</AdditionalInfoTitle>
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                </div>
                <div className="item px-3 d-flex flex-column align-items-start justify-content-center gap-2">
                    <AdditionalInfoTitle className={" mb-3 "}>the quick fox jumps over</AdditionalInfoTitle>
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                    <CollapsingDiv title={"the quick fox jumps over the lazy dog"} content={"Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."} />
                </div>
            </div>


        </>

    )
}

function ReviewsContainer() {
    return (<>
        <div className="reviews-container p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem adipisci qui modi molestias autem nulla quisquam sint eaque voluptatibus, eius officia excepturi error omnis officiis eveniet tempora iste odit tempore cum tenetur, esse molestiae possimus, distinctio dolor. Deserunt pariatur cum dolores mollitia reiciendis adipisci doloribus repudiandae ea nostrum et! Magni.
        </div>
    </>)
}

function DescriptionContainer() {
    return (<>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis cupiditate cum temporibus mollitia vitae iusto modi. Tenetur rerum, aliquam ex dolore, quae blanditiis doloremque hic molestiae veritatis officiis sed numquam tempora delectus distinctio fuga quos? Excepturi deserunt ab assumenda, id molestias adipisci doloribus dolor vel! Iste sed perspiciatis repudiandae unde!
    </>)
}

export default function AdditionalInformationSection() {
    const items = {
        "addInfo": <AdditionalInformation />,
        "descrip": <DescriptionContainer />,
        "reviews": <ReviewsContainer />
    }
    const [SectionToDisplay, setSectionToDisplay] = useState("addInfo")
    let isMobile = (useWindowSize()).isMobile


    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 py-2">
            <div className={" action-tab d-flex justify-content-center align-items-center my-5 px-3 " + (isMobile ? " gap-2 " : " gap-5 ")}>
                <div className={" tab description-tab fs-7 text-secondary " + (SectionToDisplay === "descrip" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("descrip")}>Description</div>
                <div className={" tab add-info-tab fs-7 text-secondary " + (SectionToDisplay === "addInfo" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("addInfo")}>Additional Information</div>
                <div className={" tab reviews-tab fs-7 text-secondary " + (SectionToDisplay === "reviews" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("reviews")}>Reviews <span className=" text-success fw-700 ">(0)</span></div>
            </div>
            <div className={"display w-100  gap-3 align-items-start mt-3 " + (isMobile ? "justify-items-center " : "justify-items-between")}>
                {items[SectionToDisplay]}
            </div>
        </div>
    )
}

