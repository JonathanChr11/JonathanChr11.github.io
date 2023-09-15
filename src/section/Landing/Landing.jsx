import React, { useEffect } from "react";
import { UseNav } from "components/Navbar/UseNav";
import AOS from "aos";
import "aos/dist/aos.css";

import Typewriter from "typewriter-effect";

import JoCDark from "assets/images/joc-dark.svg";
import JoCLight from "assets/images/joc-light.svg";

import Button from "components/Button/Button";

import "styles/section/_landing.scss";

const Landing = () => {
    const landingRef = UseNav("Home");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section ref={landingRef} id="homeSection">
            <div
                className="landing-container"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle-fixed"></div>
                <div className="landing-container-left">
                    <img className="joc-dark" src={JoCDark} alt="" />
                    <img className="joc-light" src={JoCLight} alt="" />
                </div>
                <div className="landing-container-right">
                    <div className="contents">
                        <p className="contents-name">
                            Hello I'am
                            <br />
                            <span className="names">Jonathan Christian</span>
                        </p>
                        <div className="contents-major">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Information Systems",
                                        "BINUSIAN 2025",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="profile">
                        <Button
                            btnLink={
                                "https://drive.google.com/file/d/1Yr4FK2IfRJExAXfBD-K_sKuMnngJsQ8e/view?usp=sharing"
                            }
                            btnStyle={"btn-cv"}
                            iconDisplayBack={"fa-solid fa-download"}
                            btnTextStyle={"margin-right"}
                            btnLabel={"See my CV"}
                        />
                        <Button
                            btnLink={
                                "https://www.linkedin.com/in/jonathan-christian-286478220/"
                            }
                            btnStyle={"btn-linkedin"}
                            iconDisplayFront={"fa-brands fa-linkedin"}
                            btnTextStyle={"margin-left"}
                            btnLabel={"Get in touch by LinkedIn"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
