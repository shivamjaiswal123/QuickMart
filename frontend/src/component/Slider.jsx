import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Sliderr({images}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return (
        <div className="slider-container" style={{ width: '60%', margin: 'auto' }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <img key={index} width="" src={img} alt="" />
            ))}
          </Slider>
        </div>
      );
}

export default Sliderr
