import React, { useEffect } from "react";
import { UseNav } from "components/Navbar/UseNav";
import AOS from "aos";
import "aos/dist/aos.css";
// import ProgressBar from "@ramonak/react-progress-bar";

import HTMLIcon from "assets/icon/html-icon.svg";
import CSSIcon from "assets/icon/css-icon.svg";
import JSIcon from "assets/icon/js-icon.svg";
import FigmaIcon from "assets/icon/figma-icon.svg";
import TailwindIcon from "assets/icon/tailwind-icon.svg";
import ReactIcon from "assets/icon/react-icon.svg";
import TypeScriptIcon from "assets/icon/typescript-icon.svg";
import NextJSIcon from "assets/icon/nextjs-icon.svg";
import JavaIcon from "assets/icon/java-icon.svg";
import LaravelIcon from "assets/icon/laravel-icon.svg";

import "styles/section/_skills.scss";

const Skills = () => {
    const skillsRef = UseNav("Skills");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section ref={skillsRef} id="skillsSection">
            <div className="skills-container">
                <h1 className="title">My Skills</h1>
                <hr />
                <div className="skills-subcontainer">
                    <p
                        className="skills-desc"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Selama di BNCC (Bina Nusantara Computer Club), aku
                        mempelajari banyak hal terutama dibagian hard skills
                        seperti :
                    </p>
                    <div className="skills-subcontainer-list">
                        <div
                            className="skills-list-left"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2 className="skills-list-alignment">
                                HTML
                                <span>HTML</span>
                                <span>HTML</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={HTMLIcon}
                                        alt="HTML Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                CSS
                                <span>CSS</span>
                                <span>CSS</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={CSSIcon}
                                        alt="CSS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                Tailwind CSS
                                <span>Tailwind CSS</span>
                                <span>Tailwind CSS</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={TailwindIcon}
                                        alt="Tailwind CSS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                JavaScript
                                <span>JavaScript</span>
                                <span>JavaScript</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={JSIcon}
                                        alt="JS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                Figma
                                <span>Figma</span>
                                <span>Figma</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={FigmaIcon}
                                        alt="Figma Icon"
                                    />
                                </span>
                            </h2>
                        </div>
                        <div
                            className="skills-list-right"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <h2 className="skills-list-alignment">
                                ReactJS
                                <span>ReactJS</span>
                                <span>ReactJS</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={ReactIcon}
                                        alt="ReactJS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                TypeScript
                                <span>TypeScript</span>
                                <span>TypeScript</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={TypeScriptIcon}
                                        alt="TS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                NextJS
                                <span>NextJS</span>
                                <span>NextJS</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={NextJSIcon}
                                        alt="NextJS Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                Java
                                <span>Java</span>
                                <span>Java</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={JavaIcon}
                                        alt="Java Icon"
                                    />
                                </span>
                            </h2>
                            <h2 className="skills-list-alignment">
                                Laravel
                                <span>Laravel</span>
                                <span>Laravel</span>
                                <span>
                                    <img
                                        className="skills-icon"
                                        src={LaravelIcon}
                                        alt="Laravel Icon"
                                    />
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
