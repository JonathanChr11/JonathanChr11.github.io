import React, { useEffect } from "react";
import { UseNav } from '../../components/Navbar/UseNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from "@ramonak/react-progress-bar";

import HTMLIcon from '../../assets/icon/html-icon.svg';
import CSSIcon from '../../assets/icon/css-icon.svg';
import JSIcon from '../../assets/icon/js-icon.svg';
import FigmaIcon from '../../assets/icon/figma-icon.svg';
import TailwindIcon from '../../assets/icon/tailwind-icon.svg';
import ReactIcon from '../../assets/icon/react-icon.svg';

import '../../styles/section/_skills.scss';

const Skills = () => {
    const skillsRef = UseNav("Skills")

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section ref={skillsRef} id="skillsSection">
            <div className="skills-container">
                <h1 className="title">My Skills</h1>
                <hr />
                <div className="skills-subcontainer">
                    <div className="skills-subcontainer-left" data-aos="fade-right" data-aos-duration="1000">
                        <h1 className="skills-title">This is my skills</h1>
                        <p className="skills-desc">Selama di BNCC (Bina Nusantara Computer Club), aku mempelajari banyak hal terutama dibagian hard skills seperti :</p>
                        <div className='skills-subcontainer-list'>
                            <div className='skills-list-left'>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={HTMLIcon} alt="" /></div>
                                    <div><b>HTML</b></div>
                                </div>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={CSSIcon} alt="" /></div>
                                    <div><b>CSS</b></div>
                                </div>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={JSIcon} alt="" /></div>
                                    <div><b>JavaScript</b></div>
                                </div>
                            </div>
                            <div className='skills-list-right'>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={FigmaIcon} alt="" /></div>
                                    <div><b>Figma</b></div>
                                </div>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={TailwindIcon} alt="" /></div>
                                    <div><b>Tailwind CSS</b></div>
                                </div>
                                <div className='skills-list-alignment'>
                                    <div><img className="skills-icon" src={ReactIcon} alt="" /></div>
                                    <div><b>React JS</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-subcontainer-right" data-aos="fade-up" data-aos-duration="1000">
                        <div className='skills-progressbar'>
                            <div>
                                <img src={HTMLIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={90}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                        <div className='skills-progressbar'>
                            <div>
                                <img src={CSSIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={80}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                        <div className='skills-progressbar'>
                            <div>
                                <img src={JSIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={60}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                        <div className='skills-progressbar'>
                            <div>
                                <img className="figma-progress" src={FigmaIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={80}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                        <div className='skills-progressbar'>
                            <div>
                                <img src={TailwindIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={85}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                        <div className='skills-progressbar'>
                            <div>
                                <img src={ReactIcon} alt="" />
                            </div>
                            <div className='progressbar-width'>
                                <ProgressBar
                                completed={50}
                                bgColor={"#32CD32"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;