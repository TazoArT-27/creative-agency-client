import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

export default class Responsive extends Component {
  render() {

    const projectData = [
		{
			img: carousel2,
		},
		{
			img: carousel3,
		},
		{
			img: carousel4,
		},
		{
			img: carousel5,
		},
		{
			img: carousel1,
		},
	];

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <section className="carousel">
            <h1 className="section-title text-white text-center py-5 my-5 pt-xl-5">
                        Here are some of <span style={{color: '#7AB259'}}>our works</span>
			</h1>
            <div className='pt-xl-5'>
                <Slider {...settings} className="">
                  {projectData.map((project) => (
                    <div className="carousel-slide img-fluid" key={Math.random()}>
                      <img className="carousel-img" src={project.img} alt="" />
                    </div>
                  ))}
                </Slider>
            </div>
      </section>
    );
  }
}