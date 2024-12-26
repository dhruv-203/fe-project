import React, { ReactNode, useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useCart, useWindowSize } from "../../../Context/context";
import { RootState } from "../../../Store";
import { useLogoutUserMutation } from "../../../Store/Slices/authApi";
import "../../../utility.css";
import { toastify } from "../../../utils";
import BrandLogo from "./BrandLogo";
import "./HeaderLayout.css";
import Logo from "./Logo";
import LogoContainer from "./LogoContainer";
import Text from "./Text";
function HeaderLayout() {
  let { isMobile } = useWindowSize();
  const { getCount } = useCart();
  const { isAuthenticated, user, accessToken } = useSelector(
    (state: RootState) => state.auth
  );

  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const [isOpen, setOpen] = useState<boolean>(false);

  const getOrdersCount = () => {
    return user?.orders.length ?? 0;
  };

  return (
    <div>
      <Header className={"bg-dark"} />
      <div
        className={`position-relative  gap-2  d-flex justify-content-between py-2  align-items-center bg-light `}
      >
        <NavLink to={"/home"}>
          <BrandLogo className={"px-4 p-3"} />
        </NavLink>
        {isMobile ? (
          //mobile
          <>
            <GiHamburgerMenu
              className="fs-4 px-4"
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </>
        ) : (
          //desktop
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
              {!isAuthenticated ? (
                <NavLink
                  to={"/auth/register"}
                  className={
                    "text-primary d-flex justify-content-center align-items-center gap-1"
                  }
                >
                  <MdPersonOutline className="fs-5" />
                  <Text className="py-2">Login / Register</Text>
                </NavLink>
              ) : (
                <NavLink to={"/home/profile"}>
                  <div className="profileIconContainer">
                    <img
                      className="profilePhoto"
                      src={user?.profilePhoto}
                      alt="profilephoto"
                    />
                  </div>
                </NavLink>
              )}
              <LogoContainer className="navbar-logo-container flex-wrap text-primary gap-4  align-items-center">
                {isAuthenticated && (
                  <>
                    <Logo
                      className="fs-3 mt-2"
                      onClick={async () => {
                        try {
                          await logoutUser({ accessToken }).unwrap();
                          toastify("Logout Successful", "success");
                          handleLinkClick(isOpen, setOpen);
                        } catch (err: any) {
                          console.log(err);
                          if (err?.data && err.data?.message) {
                            toastify(err.data.message, "error");
                          } else {
                            toastify(
                              "Unexpected error occureed: logout failed",
                              "error"
                            );
                          }
                          handleLinkClick(isOpen, setOpen);
                        }
                      }}
                    >
                      <IoIosLogOut />
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
                    <NavLink to={"/home/orders"}>
                      <Logo>
                        <span className="d-flex align-items-center justify-content-center text-primary gap-1">
                          <FiShoppingBag />{" "}
                          <span className="fs-6 text-align-center">
                            {getOrdersCount()}
                          </span>
                        </span>
                      </Logo>
                    </NavLink>
                  </>
                )}
              </LogoContainer>
            </div>
          </div>
        )}
        {isMobile && isOpen && (
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
              {!isAuthenticated ? (
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
              ) : (
                <div className="profileIconContainer">
                  <img
                    className="profilePhoto"
                    src={user?.profilePhoto}
                    alt="profilephoto"
                  />
                </div>
              )}
              <LogoContainer className="navbar-logo-container flex-column flex-wrap text-primary gap-4  align-items-center">
                {isAuthenticated && (
                  <>
                    <Logo
                      className="fs-2"
                      onClick={async () => {
                        try {
                          await logoutUser({ accessToken });
                          handleLinkClick(isOpen, setOpen);
                        } catch (err) {
                          handleLinkClick(isOpen, setOpen);
                          console.log(err);
                        }
                      }}
                    >
                      <IoIosLogOut />
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
                    <NavLink
                      to={"/home/orders"}
                      onClick={() => handleLinkClick(isOpen, setOpen)}
                    >
                      <Logo className="fs-3">
                        <span className="d-flex align-items-center justify-content-center gap-1 text-primary">
                          <FiShoppingBag />{" "}
                          <span className="fs-6 text-align-center">
                            {getOrdersCount()}
                          </span>
                        </span>
                      </Logo>
                    </NavLink>
                  </>
                )}
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
