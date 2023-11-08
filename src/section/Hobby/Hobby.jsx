import React, { useEffect } from "react";
import { Carousel } from "antd";
import { HOBBY_CONTENTS } from "constants/hobby";

import AOS from "aos";
import "aos/dist/aos.css";

import "styles/section/_hobby.scss";

const Hobby = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="hobby-container">
            <h1 className="title">My Hobby</h1>
            <hr />
            <div data-aos="fade-up" data-aos-duration="1000">
                <Carousel className="carousel-align" autoplay>
                    {HOBBY_CONTENTS.map((data) => (
                        <div className="picture" key={data.id}>
                            <img
                                className="picture-style"
                                src={data.image}
                                alt="Hobby Img"
                            />
                            <div className="description">
                                <h2>{data.title}</h2>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Hobby;
