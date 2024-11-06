import React from 'react'
import { useWindowSize } from '../../Context/context'
import { HeaderLogoContainer } from '../HomePage/Header/HeaderLayout'

interface TeamMemberProps {
    profilePic: string,
    username?: string
    profession?: string
}

function TeamMember({ profilePic, username = "Username", profession = "Profession" }: TeamMemberProps) {
    let isMobile = (useWindowSize()).isMobile

    return (
        <div className={' d-flex flex-column align-items-center justify-content-center gap-3 ' + (isMobile ? " px-4 " : " ")}>
            <div className="profile-container">
                <img src={profilePic} alt="" width={"100%"} height={"100%"} />
            </div>
            <div className="username fs-6 fw-600 p-2">{username}</div>
            <div className="profession fs-7 fw-600 p-2">{profession}</div>
            <HeaderLogoContainer className=' text-primary opacity-1 p-2 ' logoColor={"text-primary"} />
        </div>
    )
}

export default TeamMember
