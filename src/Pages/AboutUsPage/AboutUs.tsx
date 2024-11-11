import Hero from '../../Components/AboutUs/Hero'
import './AboutUs.css'
import { useWindowSize } from '../../Context/context'
import NumericDataContainer from '../../Components/AboutUs/NumericDataContainer'
import { RiPlayMiniFill } from "react-icons/ri";
import SectionTitle from '../../Components/HomePage/EditorPick/SectionTitle'
import SectionTitleContainer from '../../Components/HomePage/EditorPick/SectionTitleContainer'
import SectionDescription from '../../Components/HomePage/EditorPick/SectionDescription'
import person1 from '../../Assets/AboutUs/Profiles/person1.png'
import person2 from '../../Assets/AboutUs/Profiles/person2.png'
import person3 from '../../Assets/AboutUs/Profiles/person3.png'
import TeamMember from '../../Components/AboutUs/TeamMember'
import BrandLogosContainer from '../../Components/ProductPage/BrandLogosContainer'
import abtImg from '../../Assets/AboutUs/bottom.png'
import ContactUs from '../ContactUs/ContactUs'
function AboutUs() {
    let {isMobile} = (useWindowSize())

    return (
        <>
            <div className="container mt-5 main ">
                <Hero
                    preTitle={"ABOUT COMPANY"}
                    title={"ABOUT US"}
                    description={"We know how large objects will act, but things on a small scale"}
                    bottomChild={<>
                        <div className="px-3 py-2 fs-7 fw-600 bg-primary text-light">
                            Get Qoute Now
                        </div>
                    </>}
                />
                <div className={" info-section d-flex gap-4 justify-content-center align-items-center " + (isMobile ? "flex-column" : " ")}>
                    <div className={" left-info my-auto px-2 " + (isMobile ? "text-align-center px-4 " : " ")}>
                        <div className="text-danger fs-7 fw-600 p-2">Problems Trying</div>
                        <div className="fw-600 p-2 fs-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</div>
                    </div>
                    <div className={" right-info my-auto  " + (isMobile ? " text-align-center px-4 " : " px-2 ")}>
                        <div className="text-secondary fs-7 fw-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </div>
                    </div>
                </div>
                <div className={" numbers-section d-flex gap-4 justify-content-between  align-items-center my-5" + (isMobile ? " flex-column px-4" : " px-2 ")}>
                    <NumericDataContainer title={"15K"} description={"Happy Customers"} />
                    <NumericDataContainer title={"150K"} description={"Monthly Visitors"} />
                    <NumericDataContainer title={"15"} description={"Countries Worldwide"} />
                    <NumericDataContainer title={"100+"} description={"Top Partners"} />
                </div>
                <div className="video-div mx-auto my-auto">
                    <div className='play-btn ' >
                        <RiPlayMiniFill className=' text-light play-icn' />
                    </div>
                </div>
                <div className="meet-out-team d-flex my-4 flex-column gap-4 align-items-center justify-content-center">
                    <SectionTitleContainer className={" p-4 "}>
                        <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >Meet Our Team</SectionTitle>
                        <SectionDescription fontColor={"text-secondary "} className={" p-2 "}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </SectionDescription>
                    </SectionTitleContainer>
                    <div className={" profiles-container d-flex align-items-center justify-content-center gap-3 p-4 " + (isMobile ? " flex-column " : " ")}>
                        <TeamMember profilePic={person1} />
                        <TeamMember profilePic={person2} />
                        <TeamMember profilePic={person3} />
                    </div>
                </div>
                <div className="big-companies d-flex my-4 flex-column gap-4 align-items-center justify content center">
                    <SectionTitleContainer className={" p-4 "}>
                        <SectionTitle fontColor={" text-dark "} className={" p-2 fw-700 "} fontSize={"fs-3"} >Big Companies Are Here</SectionTitle>
                        <SectionDescription fontColor={"text-secondary "} className={" p-2 "}>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </SectionDescription>
                    </SectionTitleContainer>
                    <BrandLogosContainer />
                </div>
            </div>
            <ContactUs img={abtImg} />
        </>
    )
}

export default AboutUs
