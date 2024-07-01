/** @format */

import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
  });

  const sendMesseage = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: true,
    });
  };
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <h5>Home / Contact Us</h5>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 contact-form">
            <h1>Get in Touch</h1>
            <p className="ms-3">
              Your email address will not published. Required fileds are marked{" "}
              <span className="text-danger">*</span>.
            </p>
            <div className="form">
              <form onSubmit={sendMesseage}>
                {contact.loading && (
                  <div className="alert alert-success text-center">
                    Your message have been declared successfully.
                  </div>
                )}
                <div className="name-email my-2">
                  <div>
                    <label htmlFor="name" className="d-block ms-3">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={contact.name}
                      id="name"
                      placeholder="Your Name"
                      required
                      onChange={(e) => {
                        setContact({ ...contact, name: e.target.value });
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="Email" className="d-block ms-3">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={contact.email}
                      id="Email"
                      onChange={(e) => {
                        setContact({ ...contact, email: e.target.value });
                      }}
                      placeholder="Your Email address"
                      required
                    />
                  </div>
                </div>
                <label htmlFor="" className="ms-3 mt-3">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  value={contact.subject}
                  className="mb-3"
                  placeholder="Enter Your Subject"
                  onChange={(e) => {
                    setContact({ ...contact, subject: e.target.value });
                  }}
                  required
                />
                <label htmlFor="" className="d-block ms-3">
                  Your Message <span className="text-danger">*</span>
                </label>
                <textarea
                  name=""
                  value={contact.message}
                  id=""
                  className="w-100 contact-message"
                  required
                  onChange={(e) => {
                    setContact({ ...contact, message: e.target.value });
                  }}
                ></textarea>
                <button className="mx-2 my-3 default-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46160.69633021638!2d-0.19733242251311023!3d51.547412796294196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a698eed934d%3A0xe6df23dac4e084cd!2sKenwood%20House!5e0!3m2!1sen!2seg!4v1715258489684!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: "0", borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
