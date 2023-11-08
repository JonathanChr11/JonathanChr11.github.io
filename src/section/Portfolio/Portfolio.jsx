import React, { useEffect } from "react";
import { UseNav } from "components/Navbar/UseNav";
import { PORTFOLIO_CONTENTS } from "constants/portfolio";

import Image from "components/Image/Image";

import AOS from "aos";
import "aos/dist/aos.css";

import "styles/section/_portfolio.scss";

const Portfolio = () => {
    const portfolioRef = UseNav("Portfolio");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section ref={portfolioRef} id="portfolioSection">
            <div className="portfolio-container">
                <h1 className="title">Portfolio</h1>
                <hr />
                <div className="portfolio-container-flex">
                    {PORTFOLIO_CONTENTS.map((data) => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={data.id}>
                            <Image
                                image={data.image}
                                imageTitle={data.imageTitle}
                                webLink={data.webLink}
                                githubLink={data.githubLink}
                                firstText={data.firstText}
                                secondText={data.secondText}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
