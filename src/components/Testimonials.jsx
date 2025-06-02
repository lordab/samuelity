import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import imageSource from "/coding_1329016.png";

function Testimonials() {
  const data = [
    {
      name: "Peter Navaro",
      image: '/Person1.jpeg',
      review: "Partnering with Samulity was one of the best decisions we made for our business. Their team understood our needs from day one and delivered a custom software solution that has significantly improved our operations. The communication, support, and technical expertise they offer are unmatched.",
    },
    {
      name: "Emily Peterson",
      image: '/Person2.jpeg',
      review: "We approached Samulity for cloud migration services, and the entire process was seamless. Their team worked diligently, minimized downtime, and provided us with a scalable and secure environment. We now have peace of mind knowing our data is in good hands."
,
    },
    {
      name: "Sameer Deshpande",
      image: '/Person3.png',
      review: 'Efficient and professional team that delivered a sleek, responsive website tailored to our needs.'+
'Excellent communication and quick turnarounds made the entire process smooth and hassle-free.',
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="font-bold text-gray-800 text-2xl font-inter">Testimonials</h2>
      <div className="slider-container w-5/6 m-auto p-6 gap-2 md:w-4xl">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
                <div tabIndex={index}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-row">
                <div className="p-2">
                  <img src={item.image} alt="" className="w-md h-20 rounded-lg" />
                </div>
                <div className="min-h-90">
                <h1 className="font-medium tracking-tight text-gray-800 text-xl font-poppins ml-4 mr-2">{item.name}</h1>
                  <p className="text-sm p-4 tracking-tight font-poppins">{item.review}</p>
                </div>
              </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
