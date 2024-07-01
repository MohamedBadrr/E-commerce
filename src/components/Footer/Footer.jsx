import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div class="coppright text-center">
          &copy; copyright{" "}
          <strong>
            <span class="text-dark me">Quicky</span>
          </strong>{" "}
          All Rights Reseved
        </div>
        <div class="credited text-center">
          Designed By{" "}
          <span class="me">
            Eng:{" "}
            <strong class="text-dark me">
              <Link
                to={"https://mohamedbadrr.github.io/Protfolio/"}
                className="text-dark"
              >
                Mohamed Badr
              </Link>
            </strong>
          </span>
        </div>
        <div class="icons text-center">
          <Link to="https://github.com/MohamedBadrr" target="_blank">
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100004812045596"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohamed-badr-636804219/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100004812045596"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </Link>
          <Link
            to="https://www.instagram.com/mohamed_bader_111/"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
