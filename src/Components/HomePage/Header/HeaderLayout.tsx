import React, { ReactNode, useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { MdPersonOutline } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../Context/context";
import "../../../utility.css";
import BrandLogo from "./BrandLogo";
import "./HeaderLayout.css";
import Logo from "./Logo";
import LogoContainer from "./LogoContainer";
import Text from "./Text";

function HeaderLayout() {
  const [isHamburger, setIsHamburger] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false
  );
  const { getCount } = useCart();
  
  useEffect(() => {
    const handleResize = () => setIsHamburger(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Header className={"bg-dark"} />
      <div
        className={`position-relative  gap-2  d-flex justify-content-between py-2  align-items-center bg-light `}
      >
        <NavLink to={"/home"}>
          <BrandLogo className={"px-4 p-3"} />
        </NavLink>
        {isHamburger ? (
          <GiHamburgerMenu
            className="fs-4 px-4"
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
        ) : (
          <div className=" d-flex  align-items-center gap-3 justify-content-between container mr-5 ">
            <div className="nav-items text-align-center flex-wrap child-start d-flex align-items-center justify-content-center gap-3 p-3 ">
              <NavItem>
                <NavLink className="text-dark" to={"/home"}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="text-dark d-flex align-items-center justify-content-center"
                  to={"/home/products"}
                >
                  Shop{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" to={"/home/about"}>
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="text-dark" to={"/home/contact"}>
                  Contact
                </NavLink>
              </NavItem>
            </div>
            <div className="login-register-container flex-wrap d-flex justify-content-center align-items-center gap-4">
              <NavLink
                to={"/auth/register"}
                className={
                  "text-primary d-flex justify-content-center align-items-center gap-1"
                }
              >
                <MdPersonOutline className="fs-5" />
                <Text className="py-2">Login / Register</Text>
              </NavLink>
              <LogoContainer className="navbar-logo-container flex-wrap text-primary gap-4  align-items-center">
                <Logo>
                  <BiSearchAlt2 className="fs-5 mt-1" />
                </Logo>
                <NavLink to={"/home/cart"}>
                  <Logo>
                    <span className="d-flex align-items-center justify-content-center gap-1 text-primary">
                      <BsCart />{" "}
                      <span className="fs-6 text-align-center">
                        {getCount()}
                      </span>
                    </span>
                  </Logo>
                </NavLink>
                <Logo>
                  <span className="d-flex align-items-center justify-content-center gap-1">
                    <HiOutlineHeart />{" "}
                    <span className="fs-6 text-align-center">1</span>
                  </span>
                </Logo>
              </LogoContainer>
            </div>
          </div>
        )}
        {isHamburger && isOpen && (
          <div className="position-absolute  nav-items-container d-flex flex-column align-items-center gap-3 justify-content-center mr-0 py-3">
            <div className="nav-items text-align-center flex-column flex-wrap child-start d-flex align-items-center justify-content-center gap-3 p-3 mr-0">
              <NavItem
                handleClick={() => {
                  handleLinkClick(isOpen, setOpen);
                }}
              >
                <NavLink className="text-dark fs-4" to={"/home"}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem
                handleClick={() => {
                  handleLinkClick(isOpen, setOpen);
                }}
              >
                <NavLink
                  className="text-dark fs-4 d-flex align-items-center justify-content-center"
                  to={"/home/products"}
                >
                  Shop
                </NavLink>
              </NavItem>
              <NavItem
                handleClick={() => {
                  handleLinkClick(isOpen, setOpen);
                }}
              >
                <NavLink className="text-dark fs-4" to={"/home/about"}>
                  About
                </NavLink>
              </NavItem>
              <NavItem
                handleClick={() => {
                  handleLinkClick(isOpen, setOpen);
                }}
              >
                <NavLink className="text-dark fs-4" to={"/home/contact"}>
                  Contact
                </NavLink>
              </NavItem>
            </div>
            <div className="login-register-container flex-column flex-wrap d-flex justify-content-center align-items-center gap-4">
              <NavLink
                to={"/auth/register"}
                onClick={() => {
                  handleLinkClick(isOpen, setOpen);
                }}
                className={
                  "text-primary d-flex justify-content-center align-items-center gap-1"
                }
              >
                <MdPersonOutline className="fs-4" />
                <div className="py-2 fs-5 fw-600">Login / Register</div>
              </NavLink>
              <LogoContainer className="navbar-logo-container flex-column flex-wrap text-primary gap-4  align-items-center">
                <Logo className="fs-3">
                  <BiSearchAlt2 />
                </Logo>
                <NavLink
                  to={"/home/cart"}
                  onClick={() => {
                    handleLinkClick(isOpen, setOpen);
                  }}
                >
                  <Logo className="fs-3">
                    <span className="d-flex align-items-center justify-content-center gap-1 text-primary">
                      <BsCart />{" "}
                      <span className="fs-6 text-align-center">
                        {getCount()}
                      </span>
                    </span>
                  </Logo>
                </NavLink>
                <Logo className="fs-3">
                  <span className="d-flex align-items-center justify-content-center gap-1">
                    <HiOutlineHeart />{" "}
                    <span className="fs-6 text-align-center">1</span>
                  </span>
                </Logo>
              </LogoContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function handleLinkClick(
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  setOpen(!isOpen);
}

interface HeaderLogoContainerProps {
  children?: ReactNode;
  className?: string;
  logoColor: string;
}

export function HeaderLogoContainer({
  children = <></>,
  className = " ",
  logoColor,
}: HeaderLogoContainerProps) {
  return (
    <LogoContainer className={"gap-3 " + className}>
      <Logo>
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
  );
}

function Header({ className = "" }) {
  return (
    <div
      className={
        "header-container d-flex justify-content-between align-items-center px-3 flex-wrap " +
        className
      }
    >
      {/* Header Contact Container */}
      <div className="header-contact-container d-flex gap-2 justify-content-center align-content-center flex-wrap  text-light">
        <Text
          className={
            "d-flex align-items-center justify-content-center gap-2 text-light"
          }
        >
          <>
            <HiOutlinePhone className="fs-5 text-light" />
            <p className="fw-600">(225) 555-0118</p>
          </>
        </Text>
        <Text
          className={
            "d-flex align-items-center justify-content-center gap-2 text-light"
          }
        >
          <>
            <PiEnvelope className="fs-5 text-light" />
            <p className="fw-600">info@yourdomain.com</p>
          </>
        </Text>
      </div>

      {/* Header tagline*/}
      <Text className={"text-light "}>
        Follow Us and get a chance to win 80% off
      </Text>

      {/* Socials Container */}
      <div className="header-socials-container d-flex justify-contant-center align-items-center gap-1">
        <Text className={"text-light"}>Follow us :</Text>
        <HeaderLogoContainer className="flex-wrap" logoColor={"text-light"}>
          <Logo>
            <FaYoutube className="text-light p-2 fs-5" />
          </Logo>
        </HeaderLogoContainer>
      </div>
    </div>
  );
}

interface NavItemProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

function NavItem({
  children,
  className = "",
  handleClick = () => {
    return null;
  },
}: NavItemProps) {
  return (
    <Text
      className={" text-dark opacity-06 " + className}
      onClick={handleClick}
    >
      {children}
    </Text>
  );
}

export default HeaderLayout;
