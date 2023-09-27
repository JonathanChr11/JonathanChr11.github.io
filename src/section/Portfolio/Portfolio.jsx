import React, { useEffect } from "react";
import { UseNav } from "components/Navbar/UseNav";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "components/Image/Image";
import ImageSingle from "components/Image/ImageSingle";
import ImageSingleLang from "components/Image/ImageSingleLang";
import ImageSingleLink from "components/Image/ImageSingleLink";

import ComingSoon from "assets/images/coming-soon.png";
import PortfolioImg1 from "assets/images/port1.png";
import PortfolioImg2 from "assets/images/port2.png";
import PortfolioImg3 from "assets/images/port3.png";
import PortfolioImg4 from "assets/images/port4.png";
import PortfolioImg5 from "assets/images/port5.png";
import PortfolioImg6 from "assets/images/port6.png";
import PortfolioImg7 from "assets/images/port7.png";
import PortfolioImg8 from "assets/images/port8.png";
import PortfolioImg9 from "assets/images/port9.png";
import PortfolioImg10 from "assets/images/port10.png";
import PortfolioImg11 from "assets/images/port11.png";
import PortfolioImg12 from "assets/images/port12.png";

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
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLang
                            image={PortfolioImg1}
                            webLink="https://jonathanchr11.github.io/skypics/"
                            githubLink="https://github.com/JonathanChr11/skypics"
                            firstText="VanillaJS"
                            imageTitle="SkyPics"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={PortfolioImg2}
                            webLink="https://technoscape.id/"
                            firstText="TailwindCSS"
                            secondText="ThreeJS"
                            imageTitle="TechnoScape 2022"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={PortfolioImg3}
                            githubLink="https://github.com/JonathanChr11/seashell-be"
                            firstText="TailwindCSS"
                            secondText="Laravel"
                            imageTitle="SeaShell"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLang
                            image={PortfolioImg4}
                            webLink="https://jonathanchr11.github.io/react-crud/"
                            githubLink="https://github.com/JonathanChr11/react-crud"
                            firstText="ReactJS"
                            imageTitle="FAQ Pages"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLink
                            image={PortfolioImg5}
                            githubLink="https://github.com/JonathanChr11/login-instagram"
                            firstText="Dart"
                            secondText="Flutter"
                            imageTitle="Instagram"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingle
                            image={PortfolioImg6}
                            githubLink="https://github.com/JonathanChr11/bworkshop-gui"
                            firstText="Java Programming"
                            imageTitle="GUI Workshop"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={PortfolioImg7}
                            webLink="https://technotic.bncc.net/"
                            githubLink="https://github.com/RnDBNCC/technotic"
                            firstText="ReactJS"
                            secondText="TypeScript"
                            imageTitle="Technotic"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={PortfolioImg8}
                            webLink="https://technoscape.id/"
                            firstText="TailwindCSS"
                            secondText="ThreeJS"
                            imageTitle="TechnoScape 2023"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={PortfolioImg9}
                            webLink="https://member.bncc.net/"
                            firstText="ReactJS + TypeScript"
                            secondText="SASS (SCSS)"
                            imageTitle="LEAP 2.1 (Learning Portal)"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLang
                            image={PortfolioImg10}
                            webLink="https://med-c.la11ebusiness.xyz/"
                            githubLink="https://med-c.la11ebusiness.xyz/"
                            firstText="Wordpress"
                            imageTitle="Med-C"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLang
                            image={PortfolioImg11}
                            webLink="https://jonathanchr11.github.io/cloudius-final-project-lec/"
                            githubLink="https://github.com/JonathanChr11/cloudius-final-project-lec"
                            firstText="Bootstrap"
                            imageTitle="Cloudius"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <ImageSingleLang
                            image={PortfolioImg12}
                            webLink="https://umrohvr.co.id/"
                            githubLink="https://umrohvr.co.id/"
                            firstText="Wordpress"
                            imageTitle="UmrohVR"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            image={ComingSoon}
                            webLink="https://bncc.net/"
                            firstText="NextJS"
                            secondText="TailwindCSS"
                            imageTitle="Revamp BNCC.net"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
