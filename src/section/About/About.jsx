import React, { useEffect } from "react";
import { UseNav } from 'components/Navbar/UseNav';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Photo from 'assets/images/photo.JPG'

import 'styles/section/_about.scss'

const About = () => {
    const aboutRef = UseNav("About")

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section ref={aboutRef} id="aboutSection">
            <div className="about-container">
                <h1 className="title">About Me</h1>
                <hr />
                <div className="about-container-mini">
                    <div className="about-container-mini-left" data-aos="fade-right" data-aos-duration="1000">
                        <p className="contents-intro">
                            <span className="nextLine">Halo, Nama saya Jonathan Christian.</span>
                            <span className="nextLine">Keluarga saya dan orang lain memanggil saya "Jojo" atau "JoC" (Joce).</span>
                            <span className="nextLine">Saya lahir di Surabaya, 11 Mei 2003.</span>
                            <span className="nextLine">Sekarang, saya seorang Mahasiswa di BINUS University @Kemanggisan, BINUSIAN 2025, dan jurusan saya Sistem Informasi</span>
                            <br />
                            Saya sangat suka coding dan juga tahu lebih banyak tentang bisnis, makanya saya memilih Sistem Informasi. Hobi saya adalah bernyanyi, bermain game, dan road cycling. Sejujurnya, saya sangat bersemangat untuk belajar dan melakukan sesuatu yang baru, dan juga bertemu dengan orang-orang baru.</p>
                    </div>
                    <div className="about-container-mini-right" data-aos="fade-left" data-aos-duration="1000">
                        <img className="photo" src={Photo} alt="joc" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;