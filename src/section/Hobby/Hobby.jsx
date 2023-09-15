import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'antd';

import image1 from 'assets/images/game.png'
import image2 from 'assets/images/cycling.png'
import image3 from 'assets/images/music.png'
import image4 from 'assets/images/film.png'

import 'styles/section/_hobby.scss';

const Hobby = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div className="hobby-container">
            <h1 className="title">My Hobby</h1>
            <hr />
            <div data-aos="fade-up" data-aos-duration="1000">
                <Carousel className="carousel-align" autoplay>
                    <div className="picture">
                        <img className="picture-style" src={image1} alt="" />
                        <div className="description">
                            <h2>Playing Games</h2>
                        </div>
                    </div>
                    <div className="picture">
                        <img className="picture-style" src={image2} alt="" />
                        <div className="description">
                            <h2>Road Cycling</h2>
                        </div>
                    </div>
                    <div className="picture">
                        <img className="picture-style" src={image3} alt="" />
                        <div className="description">
                            <h2>Listening to Music</h2>
                        </div>
                    </div>
                    <div className="picture">
                        <img className="picture-style" src={image4} alt="" />
                        <div className="description">
                            <h2>Watch K-Drama</h2>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Hobby;