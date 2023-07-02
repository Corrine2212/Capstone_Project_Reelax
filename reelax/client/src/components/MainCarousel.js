import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const MainCarousel = () => {
    
    const [imgIndex, setImgIndex] = useState(0)

    const NextArrow = ({onClick}) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        )
    }
    
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        )
    }
    
    const settings = {
    infinite: true, //to allow the slides to show infinitely
        lazyLoad: true,
        speed: 300, //this is the speed of slider in ms
        slidesToShow: 3, //number of slides to show up on screen
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />, //imported from 'react-icons'
        prevArrow: <PrevArrow />, //imported from 'react-icons'
        beforeChange: (current, next) => setImgIndex(next)

    };
    
    
    return (

        <div className='main-carousel'>
            <h1>React 3D Slider</h1>
            <Slider {...settings}>
                {images.map((img, idx) => (

                    <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>

                        <img src={img} alt={idx} />
                    </div>
                ))}
            </Slider>

        </div>

    );
}

export default MainCarousel;