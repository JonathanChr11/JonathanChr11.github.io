import React, { useState, useEffect, useContext } from "react";
import { NavContext } from './NavContext'

import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';

import Button from '../Button/Button';

import '../../styles/components/_button.scss';
import '../../styles/components/_navbar.scss';


const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden");
          }
          setLastScrollY(window.scrollY); 
        }
      };

      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

  const { activeLinkId } = useContext(NavContext);

  const navLinks = ["Home", "About", "Skills", "Portfolio"];
  const handleClickLogo = () => {
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
  }

  const handleClickContact = () => {
    document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" })
  }

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <ul key={content}>
        <li>
            <a onClick={handleClickNav}
                className={activeLinkId === content ? "active" : ""}>{content}</a>
        </li>
      </ul>
    )
  }

    return (
      <div className="navbar-container">
        <nav className="navbar">
            <div onClick={handleClickLogo}>
                <img className="logo-light" src={LogoLight} alt="logo-light" />
                <img className="logo-dark" src={LogoDark} alt="logo-dark" />
            </div>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={menu_class}>
                    {navLinks.map(nav => renderNavLink(nav))}
                    <Button
                    btnClick={handleClickContact}
                    btnStyle="btn-contact-resp"
                    btnLabel="Contact"
                />
                </div>
            </div>
            <div className="navbar-menu">
                {navLinks.map(nav => renderNavLink(nav))}
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