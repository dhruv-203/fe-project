import React from 'react'
import '../../../utility.css'
import './HeaderLayout.css'
import Text from './Text'
import BrandLogo from './BrandLogo'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { PiEnvelope } from "react-icons/pi";
import LogoContainer from './LogoContainer';
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import Logo from './Logo';
import { FaYoutube } from 'react-icons/fa6';
import { HiOutlineHeart } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { MdPersonOutline } from "react-icons/md";
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from '../../../Context/context'
function HeaderLayout() {
  let isMobile = useWindowSize()
  console.log(isMobile)

  return (
    <div>
      <Header className={"bg-dark"} />
      {
        isMobile ? <MobileNavBar /> : <DesktopNavBar />
      }
    </div>
  )
}

function handleLinkClick(isOpen, setOpen) {
  setOpen(!isOpen)
}

export function HeaderLogoContainer({ children, className = "", logoColor }) {
  return (
    <LogoContainer className={'gap-3 ' + className}>
      <Logo >
        <FaInstagram className={logoColor} />
      </Logo>
      <Logo>
        <FaFacebook className={logoColor} />
      </Logo>
      <Logo>
        <FaTwitter className={logoColor} />
      </Logo>
      {children}
    </LogoContainer>
  )
}

function Header({ className = "" }) {
  return (
    <div className={'header-container d-flex justify-content-between align-items-center px-3 flex-wrap ' + className}>

      {/* Header Contact Container */}
      <div className="header-contact-container d-flex gap-2 justify-content-center align-content-center flex-wrap  text-light">
        <Text className={"d-flex align-items-center justify-content-center gap-2 text-light"}>
          <HiOutlinePhone className='fs-5 text-light' />
          <p className="fw-600">(225) 555-0118</p>
        </Text>
        <Text className={"d-flex align-items-center justify-content-center gap-2 text-light"}>
          <PiEnvelope className='fs-5 text-light' />
          <p className="fw-600">info@yourdomain.com</p>
        </Text>
      </div>

      {/* Header tagline*/}
      <Text className={"text-light "} >
        Follow Us  and get a chance to win 80% off
      </Text>

      {/* Socials Container */}
      <div className="header-socials-container d-flex justify-contant-center align-items-center gap-1">
        <Text className={"text-light"}>Follow us :</Text>
        <HeaderLogoContainer className='flex-wrap' logoColor={'text-light'}>
          <Logo>
            <FaYoutube className='text-light p-2 fs-5' />
          </Logo>
        </HeaderLogoContainer>
      </div>
    </div>
  )
}

function NavItem({ children, className = "", handleClick }) {
  return (
    <Text className={'text-dark opacity-06' + className} onClick={handleClick}>
      {children}
    </Text>
  )
}




function DesktopNavBar() {
  return (
    <div className={`navbar container-fluid gap-2  d-flex justify-content-between py-2  align-items-center bg-light `} >
      <BrandLogo className={"px-4 p-3"} />
      <div className="nav-items-container d-flex  align-items-center gap-3 justify-content-between container mr-5">
        <div className="nav-items text-align-center flex-wrap child-start d-flex align-items-center justify-content-center gap-3 p-3 ">
          <NavItem>
            <NavLink className='text-dark' to={"/"}>Home</NavLink>
          </NavItem>
          <NavItem >
            <NavLink className='text-dark d-flex align-items-center justify-content-center' to={"/products"}>Shop <GoChevronDown className='fs-5 text-align-center px-1' /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' to={"/about"}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' to={"/about"}>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' to={"/contact"}>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-dark' to={"/about"}>Pages</NavLink>
          </NavItem>
        </div>
        <div className="login-register-container flex-wrap d-flex justify-content-center align-items-center gap-4">
          <NavLink to={"/"} className={"text-primary d-flex justify-content-center align-items-center gap-1"}>
            <MdPersonOutline className='fs-5' />
            <Text className='py-2'>Login / Register</Text>
          </NavLink>
          <LogoContainer className='navbar-logo-container flex-wrap text-primary gap-4  align-items-center'>
            <Logo>
              <BiSearchAlt2 />
            </Logo>
            <Logo>
              <span className="d-flex align-items-center justify-content-center gap-1"><BsCart /> <span className="fs-6 text-align-center">1</span></span>
            </Logo>
            <Logo>
              <span className="d-flex align-items-center justify-content-center gap-1"><HiOutlineHeart /> <span className="fs-6 text-align-center">1</span></span>
            </Logo>
          </LogoContainer>
        </div>
      </div>
    </div>
  )
}

function MobileNavBar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={`navbar  bg-light`} >
      <div className='gap-2  d-flex justify-content-between py-2  align-items-center  '>
        <BrandLogo className={"px-4 p-3"} />
        <GiHamburgerMenu className='fs-4 px-4' onClick={() => {
          setOpen(!isOpen)
        }} />
      </div>
      {
        isOpen ? (<div className="nav-items-container d-flex flex-column align-items-center gap-3 justify-content-center mr-0 p-3">
          <div className="nav-items text-align-center flex-column flex-wrap child-start d-flex align-items-center justify-content-center gap-3 p-3 mr-0">
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }}>
              <NavLink className='text-dark fs-4' to={"/"}>Home</NavLink>
            </NavItem>
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }} >
              <NavLink className='text-dark fs-4 d-flex align-items-center justify-content-center' to={"/products"}>Shop</NavLink>
            </NavItem>
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }}>
              <NavLink className='text-dark fs-4' to={"/about"}>About</NavLink>
            </NavItem>
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }}>
              <NavLink className='text-dark fs-4' to={"/about"}>Blog</NavLink>
            </NavItem>
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }}>
              <NavLink className='text-dark fs-4' to={"/contact"}>Contact</NavLink>
            </NavItem>
            <NavItem handleClick={() => { handleLinkClick(isOpen, setOpen) }}>
              <NavLink className='text-dark fs-4' to={"/about"}>Pages</NavLink>
            </NavItem>
          </div>
          <div className="login-register-container flex-column flex-wrap d-flex justify-content-center align-items-center gap-4">
            <NavLink to={"/"} onClick={() => { handleLinkClick(isOpen, setOpen) }} className={"text-primary d-flex justify-content-center align-items-center gap-1"}>
              <MdPersonOutline className='fs-4' />
              <div className='py-2 fs-5 fw-600'>Login / Register</div>
            </NavLink>
            <LogoContainer className='navbar-logo-container flex-column flex-wrap text-primary gap-4  align-items-center'>
              <Logo className='fs-3'>
                <BiSearchAlt2 />
              </Logo>
              <Logo className='fs-3'>
                <span className="d-flex align-items-center justify-content-center gap-1"><BsCart /> <span className="fs-6 text-align-center">1</span></span>
              </Logo>
              <Logo className='fs-3'>
                <span className="d-flex align-items-center justify-content-center gap-1"><HiOutlineHeart /> <span className="fs-6 text-align-center">1</span></span>
              </Logo>
            </LogoContainer>
          </div>
        </div>) : <></>
      }
    </div >
  )
}


export default HeaderLayout
