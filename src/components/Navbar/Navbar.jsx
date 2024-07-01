/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, deleteuser } from "../../features/user/user";

const Navbar = () => {
  const numberOfItems = useSelector((state) => state.cart);
  const numberOfFavs = useSelector((state) => state.fav);
  const [shownav, setShownav] = useState(true);
  const [showUserToggle, setShowUserToggle] = useState(false);
  const [closenav, setclosenav] = useState(false);
  const USER = useSelector((state) => state.user);

  const LogoutUser = {
    name: "",
    email: "",
    isLogged: true,
  };
  const dispatch = useDispatch();
  const logout = (LogoutUser) => {
    dispatch(deleteuser(LogoutUser));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Quicky
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {shownav && (
              <span
                onClick={() => {
                  setShownav(!shownav);
                  setclosenav(!closenav);
                }}
                className=""
              >
                <i className="fa-solid fa-bars-staggered navbaar-icon"></i>
              </span>
            )}
            {closenav && (
              <span
                onClick={() => {
                  setShownav(!shownav);
                  setclosenav(!closenav);
                }}
                className=""
              >
                <i className="fa-solid fa-xmark navbaar-icon"></i>
              </span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ul-navbar navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="nav-buttons">
              {!USER.isLogged && (
                <NavLink to="/register" className="create-btn">
                  Create Account
                </NavLink>
              )}
              {!USER.isLogged && (
                <NavLink to="/login" className="login-btn">
                  Log In
                </NavLink>
              )}

              <div className="shopping-cart">
                <NavLink to={USER.isLogged ? "/carts" : "/login"}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <span className="number-shopping">{numberOfItems.length}</span>
              </div>
              <div className="heart-cart ms-2 mb-1">
                <NavLink to={USER.isLogged ? "/fav" : "/login"}>
                  <i className="fa-solid fa-heart"></i>
                </NavLink>
                <span className="heart-shopping">{numberOfFavs.length}</span>
              </div>
              {USER.isLogged && (
                <div class="user-menu">
                  <div class="user-icon">
                    <i
                      class="fa-solid fa-user ms-4 mb-1"
                      onClick={() => {
                        setShowUserToggle(!showUserToggle);
                      }}
                    ></i>
                  </div>
                  {showUserToggle && (
                    <div class="dropdown-content  base-color">
                      <a className="text-center">{USER.name}</a>
                      <NavLink
                        to="/login"
                        className="btn btn-danger p-2 my-2 mx-1"
                        onClick={(LogoutUser) => logout(LogoutUser)}
                      >
                        Logout
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
