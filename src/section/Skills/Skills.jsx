import React, { useEffect } from "react";
import { UseNav } from "components/Navbar/UseNav";
import { LEFT_SKILLS_CONTENTS, RIGHT_SKILLS_CONTENTS } from "constants/skills";

import AOS from "aos";
import "aos/dist/aos.css";

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
                            {LEFT_SKILLS_CONTENTS.map((data) => (
                                <h2
                                    className="skills-list-alignment"
                                    key={data.id}
                                >
                                    {data.name}
                                    <span>{data.name}</span>
                                    <span>{data.name}</span>
                                    <span>
                                        <img
                                            className="skills-icon"
                                            src={data.logo}
                                            alt="Skills Logo"
                                        />
                                    </span>
                                </h2>
                            ))}
                        </div>
                        <div
                            className="skills-list-right"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            {RIGHT_SKILLS_CONTENTS.map((data) => (
                                <h2
                                    className="skills-list-alignment"
                                    key={data.id}
                                >
                                    {data.name}
                                    <span>{data.name}</span>
                                    <span>{data.name}</span>
                                    <span>
                                        <img
                                            className="skills-icon"
                                            src={data.logo}
                                            alt="Skills Logo"
                                        />
                                    </span>
                                </h2>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
