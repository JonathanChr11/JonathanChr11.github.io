import React, { useEffect } from "react";
import { UseNav } from '../../components/Navbar/UseNav';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from "../../components/Image/Image";

import PortfolioImg1 from "../../assets/images/port1.png";
import PortfolioImg2 from "../../assets/images/port2.png";
import PortfolioImg3 from "../../assets/images/port3.png";

import '../../styles/section/_portfolio.scss';

const Portfolio = () => {
    const portfolioRef = UseNav("Portfolio")

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <section ref={portfolioRef} id="portfolioSection">
            <div className="portfolio-container">
                <h1 className="title">Portfolio</h1>
                <hr />
                <div className="portfolio-container-flex" data-aos="fade-up" data-aos-duration="1000">
                    <Image
                        image={PortfolioImg1}
                        imageTitle = "TPM"
                    />
                    <Image
                        image={PortfolioImg2}
                        imageTitle = "TechnoScape 2022"
                    />
                    <Image
                        image={PortfolioImg3}
                        imageTitle = "TechnoScape 2023"
                    />
                    <Image
                        image={PortfolioImg1}
                        imageTitle = "Coming Soon"
                    />
                    <Image
                        image={PortfolioImg2}
                        imageTitle = "Coming Soon"
                    />
                    <Image
                        image={PortfolioImg3}
                        imageTitle = "Coming Soon"
                    />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;