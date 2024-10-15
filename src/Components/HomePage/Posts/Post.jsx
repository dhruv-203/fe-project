import React from 'react'
import './Post.css'
import PreTitle from '../EditorPick/PreTitle'
import SectionTitle from '../EditorPick/SectionTitle'
import MetaData from './MetaData'
import SectionDescription from '../EditorPick/SectionDescription'
import { FaChevronRight } from "react-icons/fa6";
import { CiAlarmOn } from "react-icons/ci";
import { AiOutlineAreaChart } from "react-icons/ai";

function Post({ img }) {
    return (
        <div className='post '>
            <div className="post-img-container" style={{ "backgroundImage": `url(${img})` }}>

            </div>
            <div className="post-content">
                <div className="tagGrid w-90 d-flex py-4 px-3 align-items-center justify-content-start gap-2">
                    <PreTitle fontColor='text-primary' fontSize='fs-7' className='fw-400' >Google</PreTitle>
                    <PreTitle fontColor='text-secondary' fontSize='fs-7' className='fw-400 ' >Trending</PreTitle>
                    <PreTitle fontColor='text-secondary' fontSize='fs-7' className='fw-400 ' >New</PreTitle>
                </div>
                <SectionTitle fontSize={"fs-5"} fontColor={"text-dark"} className='fw-400 p-2 w-90'>
                    Loudest à la Madison #1 (L'integral)
                </SectionTitle>
                <SectionDescription fontColor={"text-dark "} className='p-3 w-90'>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </SectionDescription>
                <div className="meta-data-container p-3 w-90 d-flex align-items-center justify-content-between">
                    <MetaData Logo={<CiAlarmOn className='text-primary fs-6 fw-600' />} text={"22 April 2021"} />
                    <MetaData Logo={<AiOutlineAreaChart className='text-success fs-6 fw-600' />} text={"10 comments"} />
                </div>
                <div className="learn-more fw-700 text-secondary p-2 d-flex w-100 text-align-center justify-content-center justify-self-center align-items-center gap-1 fs-7">Learn More <span><FaChevronRight className='text-primary fs-6 fw-400' /></span></div>
            </div>
        </div>
    )
}

export default Post
