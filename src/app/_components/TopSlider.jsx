'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

const slideImage = [
    { image: '/assets/images/book-1.webp' },
    { image: '/assets/images/book-2.webp' },
    { image: '/assets/images/book-3.webp' },
    { image: '/assets/images/book-4.webp' },
    { image: '/assets/images/book-5.webp' },
    { image: '/assets/images/book-6.webp' },
]

const TopSlider = () => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <div className="slider-sec">
            <div className="slider-body">
                <Slider {...settings}>
                    {
                        slideImage?.map((item) => (
                            <img src={item.image} alt='' />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default TopSlider
