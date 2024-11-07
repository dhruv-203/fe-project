import React from 'react'
import BrandLogo from '../Header/BrandLogo'
import { HeaderLogoContainer } from '../Header/HeaderLayout'
import SectionTitle from '../EditorPick/SectionTitle'
import SectionDescription from '../EditorPick/SectionDescription'
import './Footer.css'

function Footer() {
    return (
        <div className='footer  d-flex flex-column gap-4 align-items-start w-100   justify-content-stretch '>
            <div className="row1 d-flex flex-wrap justify-content-between w-100  align-items-center ">
                <BrandLogo className={"p-1 px-2"} />
                <HeaderLogoContainer className='text-primary opacity-1 px-4' logoColor={"text-primary"} />
            </div>
            <div className="line"></div>
            <div className="row2 d-flex  gap-4 w-100 ">
                <div className="item-container">
                    <div className="head footer-item"><SectionTitle className='fw-600' fontSize={"fs-6"}>Company Info</SectionTitle></div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>About Us</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>About Us</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Business Marketing</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>IOS and Android</SectionDescription>
                    </div>
                </div>
                <div className="item-container">
                    <div className="head footer-item"><SectionTitle className='fw-600' fontSize={"fs-6"}>Legal</SectionTitle></div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Carrier</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Carrier</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>User Analytic</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Watch a Demo</SectionDescription>
                    </div>
                </div>
                <div className="item-container">
                    <div className="head footer-item"><SectionTitle className='fw-600' fontSize={"fs-6"}>Features</SectionTitle></div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>We are hiring</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>We are hiring</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Live Chat</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Customers</SectionDescription>
                    </div>
                </div>
                <div className="item-container">
                    <div className="head footer-item"><SectionTitle fontSize={"fs-6"} className='fw-600'>Resources</SectionTitle></div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Blog</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Blog</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>Unlimited Support</SectionDescription>
                    </div>
                    <div className="content footer-item">
                        <SectionDescription fontColor={"text-dark"}>API</SectionDescription>
                    </div>
                </div>
                <div className="item-container last-container">
                    <div className="head footer-item"><SectionTitle className='fw-600' fontSize={"fs-6"}>Get in Touch</SectionTitle></div>
                    <div className="searchBarContainer w-100">
                        <div className="d-flex gap-0 w-100 justify-content-center align-items-stretch">
                            <input type="text" name="text" id="text" placeholder='Your Email' className='px-3 w-60 searchBar rounded' />
                            <div className='px-2 py-3 cursor-pointer bg-primary footer-btn text-light text-align-center fs-6 rounded w-40 d-flex align-items-center justify-content-center'>Suscribe</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
