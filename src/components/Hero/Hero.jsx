/** @format */

import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import Image1 from "../../assets/images/hero1.png";
import Image2 from "../../assets/images/hero2.png";
import Image3 from "../../assets/images/hero3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Products from "../Products/Products";
import { Numbers, Team, Testimonials } from "../AboutUs/AboutUS";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off On All Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off On All Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on All Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Hero = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false,
    margin: 5,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="container-hero">
        <div className="traingle-hero"></div>
        <div className="container">
          <div className="row hero-imag-text">
            <OwlCarousel className="owl-theme carsoul-itemm large-screens" {...options}>
              {ImageList.map((item) => (
                <div key={item.id} className="carsoul-itemm">
                  <div className="col-md-6">
                    <div className="text-hero">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <a
                        className="default-btn shop-now text-decoration-none"
                        href="#PRODUCTS"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className=" col-md-5">
                    <div className="img-hero">
                      <img src={item.img} alt="" className="w-100" />
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>

            <div  className="carsoul-itemm mobile">
                  <div className="col-md-6">
                    <div className="text-hero">
                      <h1>70% off on All Products Sale</h1>
                      <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <a
                        className="default-btn shop-now text-decoration-none"
                        href="#PRODUCTS"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className=" col-md-5">
                    <div className="img-hero">
                      <img src={Image2} alt="" className="w-100" />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <section id="PRODUCTS">
        <Products />
      </section>
      <section id="TESTIMONITIALS">
        {" "}
        <Testimonials />{" "}
      </section>
      <section id="NUMBERS">
        <Numbers />
      </section>
      <section id="TEAM">
        <Team />
      </section>
    </>
  );
};

export default Hero;
