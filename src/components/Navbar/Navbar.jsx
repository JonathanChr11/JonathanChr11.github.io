/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { NavContext } from "./NavContext";

import LogoLight from "assets/images/logo-light.svg";
import LogoDark from "assets/images/logo-dark.svg";
import LogoNoText from "assets/images/logo-no-text.svg";

import Button from "../Button/Button";

import "styles/components/_button.scss";
import "styles/components/_navbar.scss";

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(20);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setBurgerClass("burger-bar unclicked");
                setMenuClass("menu hidden");
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [controlNavbar, lastScrollY]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const windowWidth = window.innerWidth;

            if (windowWidth >= 375) {
                if (scrollTop > lastScrollTop) {
                    document.getElementById("nav-scroll").style.top = "-150px";
                } else {
                    document.getElementById("nav-scroll").style.top = "0";
                }
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    const { activeLinkId } = useContext(NavContext);

    const navLinks = ["Home", "About", "Skills", "Portfolio"];
    const handleClickLogo = () => {
        document
            .getElementById("homeSection")
            .scrollIntoView({ behavior: "smooth" });
    };

    const handleClickContact = () => {
        document
            .getElementById("contactSection")
            .scrollIntoView({ behavior: "smooth" });
    };

    const renderNavLink = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNav = () => {
            document
                .getElementById(scrollToId)
                .scrollIntoView({ behavior: "smooth" });
        };

        return (
            <ul key={content}>
                <li>
                    <a
                        onClick={handleClickNav}
                        className={activeLinkId === content ? "active" : ""}
                    >
                        {content}
                    </a>
                </li>
            </ul>
        );
    };

    return (
        <div className="navbar-container" id="nav-scroll">
            <nav className="navbar">
                <div className="navbar-logo" onClick={handleClickLogo}>
                    <img
                        className="logo-light"
                        src={LogoLight}
                        alt="logo-light"
                    />
                    <img className="logo-dark" src={LogoDark} alt="logo-dark" />
                </div>
                <img
                    className="navbar-logo-mobile"
                    src={LogoNoText}
                    alt="logo-no-text"
                />
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={menu_class}>
                        {navLinks.map((nav) => renderNavLink(nav))}
                        <Button
                            btnClick={handleClickContact}
                            btnStyle="btn-contact-resp"
                            btnLabel="Contact"
                        />
                    </div>
                </div>
                <div className="navbar-menu">
                    {navLinks.map((nav) => renderNavLink(nav))}
                </div>
                <div className="navbar-button">
                    <Button
                        btnClick={handleClickContact}
                        btnStyle="btn"
                        btnLabel="Contact"
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
