import additional1 from '../../Assets/product-page/ProductsDetails/additionalinformation.jpg'
import CollapsingDiv from './CollapsingDiv'
import AdditionalInfoTitle from './AdditionalInfoTitle'
import { ReactNode, useState } from 'react'
import './AdditionalInformationSection.css'
import { useWindowSize } from '../../Context/context'

// a component to be used internally 
function AdditionalInformation() {
    const { isMobile } = useWindowSize()

    return (
        <div className={"display w-100  gap-3 align-items-start mt-3 " + (isMobile ? "justify-items-center " : "justify-items-between")}>
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


        </div>

    )
}

function ReviewsContainer({ reviews }: { reviews: string[] }) {
    return (<div className='d-flex w-60 justify-content-between align-items-center flex-wrap '>

        {
            reviews.map((val, ind) => {
                return <div className="d-flex flex-column p-3 my-3 border rounded" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} key={ind}> <p className="mb-0 text-secondary">{val}</p>
                </div>
            })
        }

    </div>)
}

function DescriptionContainer({ description }: { description: string }) {
    return (<div className="d-flex w-60 justify-content-between align-items-center flex-wrap px-2 text-align-center ">
        {description}
    </div>)
}

export default function AdditionalInformationSection({ reviews = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, totam ab necessitatibus mollitia architecto tempore alias dignissimos optio, nisi temporibus quas asperiores repudiandae quos explicabo earum veniam doloremque illo nemo enim soluta quasi sunt pariatur expedita. Vel ducimus, numquam, earum, quidem cumque porro iste velit error veniam sunt quaerat excepturi?"], description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quaerat voluptas veritatis, mollitia optio quam doloremque assumenda ad modi officia voluptatem quasi, quo quisquam eum vitae ea est. Et voluptas animi cumque ratione repudiandae odio accusamus nemo ex sit harum possimus tempora vel, reprehenderit accusantium dolores similique id blanditiis optio?" }) {
    // console.log(reviews)
    interface SectionToDisplayTypes {
        addInfo: ReactNode,
        descrip: ReactNode,
        reviews: ReactNode
    }
    const items: SectionToDisplayTypes = {
        addInfo: <AdditionalInformation />,
        descrip: <DescriptionContainer description={description} />,
        reviews: <ReviewsContainer reviews={reviews} />
    }

    const [SectionToDisplay, setSectionToDisplay] = useState<keyof SectionToDisplayTypes>("addInfo")
    let isMobile = (useWindowSize()).isMobile


    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 mb-2">
            <div className={" action-tab d-flex justify-content-center align-items-center my-5 px-3 " + (isMobile ? " gap-2 " : " gap-5 ")}>
                <div className={" tab description-tab fs-7 text-secondary " + (SectionToDisplay === "descrip" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("descrip")}>Description</div>
                <div className={" tab add-info-tab fs-7 text-secondary " + (SectionToDisplay === "addInfo" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("addInfo")}>Additional Information</div>
                <div className={" tab reviews-tab fs-7 text-secondary " + (SectionToDisplay === "reviews" ? "fw-600" : " ")} onClick={() => setSectionToDisplay("reviews")}>Reviews <span className=" text-success fw-700 ">(0)</span></div>
            </div>
            {items[SectionToDisplay]}

        </div>
    )
}

