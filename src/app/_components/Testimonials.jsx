'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';

const testiContent = [
    {
        desc: "The editors at this company are top professors. I am very satisfied with their editing. They shared comments as well, which helped me improve my writing. The client support team was very quick.",
        image: "/assets/images/testi-img-male.webp",
        name: "Dr. Helena Roshan",
        designation: "Postdoctoral Fellow in Public Health"
    },
    {
        desc: "The editors at this company are top professors. I am very satisfied with their editing. They shared comments as well, which helped me improve my writing. The client support team was very quick.",
        image: "/assets/images/testi-img-female.webp",
        name: "Dr. Helena Roshan",
        designation: "Postdoctoral Fellow in Public Health"
    }
]

const Testimonials = () => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="testimonials-body">
            <Slider {...settings}>
                {
                    testiContent?.map((item, i) => (
                        <div className="testimonials-slider" key={i}>
                            <p>{item.desc}</p>
                            <div className="testi-footer">
                                <div className="d-flex align-items-center gap-3">
                                    <Image src={item.image} alt="" width={55} height={50} />
                                    <div className="mb-0">
                                        <div className="d-lg-flex d-block align-items-center gap-3 mb-1">
                                            <h4>{item.name}</h4>
                                            <div className="rating">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-half-line"></i>
                                            </div>
                                        </div>
                                        <span>{item.designation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Testimonials
