import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";
import '../App.css'

const SmallerCarousels = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1000,
    };

    return (
        <>
            <div className="content">
                <h1 className="header">Car Gallery</h1>
                <div className="sml-carousel-container">
                    <Slider {...settings}>
                        {Images.map((item) => (
                            <div key={item.id}>
                                <img src={item.src} alt={item.alt} className="img" />
                                <h5 className="title">{item.title}</h5>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default SmallerCarousels;