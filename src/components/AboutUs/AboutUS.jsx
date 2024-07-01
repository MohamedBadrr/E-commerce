import React, { useEffect } from "react";
import "./AboutUS.css";
import shop from "../../assets/images/s1.jpg";
import shop2 from "../../assets/images/s2.jpg";
import person1 from "../../assets/images/p1.jpg";
import person2 from "../../assets/images/p2.jpg";
import person3 from "../../assets/images/p3.jpg";
import comment1 from "../../assets/images/comment1.jpg";
import comment2 from "../../assets/images/comment2.jpg";
import comment4 from "../../assets/images/comment4.jpg";
import Swiper from "swiper";

export const Team = () => {
  return (
    <div className="mb-5">
      <h1 className="base-color fw-bold text-center">TEAM</h1>
      <p className="text-center mb-5">
        Since starting career in Online Markets in 2020 , We have a many of
        Products of many categories.
      </p>

      <div className="team">
        <div className="card one-member" style={{ width: "18rem" }}>
          <div className="">
            <img src={person1} className="w-100" alt={"person1"} />
            <div class="image-overlay">
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <h4 className="product-name">{"Selvia"}</h4>
            <span className="text-center">GENERAL MANAGER</span>
          </div>
        </div>

        <div className="card one-member" style={{ width: "18rem" }}>
          <div className="">
            <img src={person2} className="w-100" alt={"ll"} />
            <div class="image-overlay">
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <h4 className="product-name">{"Marco"}</h4>
            <span className="text-center">OWNER</span>
          </div>
        </div>

        <div className="card one-member" style={{ width: "18rem" }}>
          <div className="">
            <img src={person3} className="w-100" alt={"person3"} />
            <div class="image-overlay">
              <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="card-body ">
            <h4 className="product-name">{"Martina"}</h4>
            <span className="text-center">CEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Numbers = () => {
  return (
    <section className="">
      <div className="container-numbers">
        <div className="number">
          <div className="rakm">5</div>
          <div className="ms-2">
            <p className="first-p mt-4">Years of</p>
            <p>Experciences</p>
          </div>
        </div>

        <div className="number">
          <div className="rakm ">+2K</div>
          <div className="ms-2">
            <p className="first-p mt-4">fine</p>
            <p>Destinations</p>
          </div>
        </div>

        <div className="number">
          <div className="rakm">+5K</div>
          <div className="ms-2">
            <p className="first-p mt-4">Customer</p>
            <p>Reviews</p>
          </div>
        </div>

        <div className="number">
          <div className="rakm">4.8</div>
          <div className="ms-2">
            <p className="first-p mt-4">Overall</p>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []); // Initialize Swiper only once on component mount

  return (
    <section className="clinet-testimonials">
      <h1 className="text-center pt-5">What Our Clients Says ?</h1>
      <h5 className="text-center ">Let's See</h5>

      <div className="testimonials-container">
        <div className="testimonial swiper-container">
          <div className="testi-content swiper-wrapper">
            <div className="slide swiper-slide">
              <img src={comment1} alt="das" className="image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, saepe provident dolorem a quaerat quo error facere
                nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                asperiores doloremque deserunt eum nemo.
              </p>
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Flutter Developer</span>
              </div>
            </div>
            <div className="slide swiper-slide">
              <img src={comment2} alt="" className="image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, saepe provident dolorem a quaerat quo error facere
                nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                asperiores doloremque deserunt eum nemo.
              </p>
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Manager</span>
              </div>
            </div>
            <div className="slide swiper-slide">
              <img src={comment4} alt="" className="image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, saepe provident dolorem a quaerat quo error facere
                nihil deleniti eligendi ipsum adipisci, fugit, architecto amet
                asperiores doloremque deserunt eum nemo.
              </p>
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <div className="details">
                <span className="name">Marnie Lotter</span>
                <span className="job">Freelancer</span>
              </div>
            </div>
          </div>
          <div className="swiper-button-next nav-btn"></div>
          <div className="swiper-button-prev nav-btn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

const AboutUS = () => {
  return (
    <div className="about-page">
      <div className="contact-title">
        <h1>About Us</h1>
        <h5>Home / About Us</h5>
      </div>
      <div className="container">
        <div className="about-section">
          <div className="about-text">
            <h1>
              Why People Choose <span className="fw-bold">Quicky</span> ?
            </h1>
            <ul className="main-list">
              <li className="title-li">
                There are many reasons to choose us :
              </li>
              <li>
                <ul>
                  <li className="resoan">
                    We offer a diverse selection of products to cater to various
                    tastes and preferences.
                  </li>
                  <li className="resoan">
                    We prioritize fast and reliable shipping to ensure that
                    customers receive their orders promptly, enhancing
                    satisfaction and trust in our service.
                  </li>
                  <li className="resoan">
                    Our dedicated customer support team is available to assist
                    customers with any inquiries or issues they may have.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src={shop} alt="" className="" />
          </div>
        </div>

        <div className="about-section my-5 second-about-section">
          <div className="about-image">
            <img src={shop2} alt="" className="" />
          </div>

          <div className="about-text ">
            <h1>
              <span className="fw-bold story-title">Our Story</span>
            </h1>
            <p className="story">
              Established in (2020) by SMAAP Founders, Quiky is dedicated to
              transforming the online shopping experience. With a focus on
              innovation and quality, we offer a diverse range of products
              curated to inspire and delight customers globally. Our commitment
              to customer satisfaction drives everything we do, from our
              meticulous product selection to our personalized service and
              hassle-free returns. Thank you for joining us on this journey as
              we continue to innovate and serve you better.
            </p>
          </div>
        </div>

        <Team />

        <Numbers />
      </div>

      <Testimonials />
    </div>
  );
};

export default AboutUS;
