import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";


const Navbar = () => {
    const location = useLocation();
    const [navbar, setNavbar] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = (value) => {
        setShowMenu(value);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    const checkLogin = () => {
        const account = localStorage.getItem("login-token");
        if (account) {
            return (
                <li className="nav__item">
                    <NavLink to="/setting" className="nav__link-logo nav__cta-logo">
                        <img alt="logo" src={require("../../assets/background/Sample_User_Icon.png")}></img>
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li className="nav__item">
                    <NavLink to="/login" className="nav__link nav__cta">
                        登陆
                    </NavLink>
                </li>
            )
        }
    }

    useEffect(() => {
        checkLogin();
        setShowMenu(false);
    }, [location]);

    return (
        <header className={navbar ? "header navbaractive" : "header"}>
            <nav className={navbar ? "nav container navbaractive" : "nav container"}>
                <NavLink to="/" className="nav__logo">
                    arablinguo
                </NavLink>

                <div
                    className={`nav__menu 
                        ${showMenu === true ? "show-menu" : ""}`}
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                                词典
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/translator" className="nav__link" onClick={closeMenuOnMobile}>
                                翻译
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/forum" className="nav__link" onClick={closeMenuOnMobile}>
                                论坛
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/test" className="nav__link" onClick={closeMenuOnMobile}>
                                测试
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="/reading"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                课文点读
                            </NavLink>
                        </li>
                        {/* <li className="nav__item">
                            <NavLink
                                to="/services"
                                className="nav__link"
                                onClick={closeMenuOnMobile}
                            >
                                论坛
                            </NavLink>
                        </li> */}
                        {checkLogin()}
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={() =>toggleMenu(false)}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() =>toggleMenu(true)}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
