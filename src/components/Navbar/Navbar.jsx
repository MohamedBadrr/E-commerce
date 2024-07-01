import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, deleteuser } from "../../features/user/user";

const Navbar = () => {
  const numberOfItems = useSelector((state) => state.cart);
  const numberOfFavs = useSelector((state) => state.fav);
  const [shownav, setShownav] = useState(false);
  const [showUserToggle, setShowUserToggle] = useState(false);
  const USER = useSelector((state) => state.user);
  const navRef = useRef(null); // Reference to navbar element

  const LogoutUser = {
    name: "",
    email: "",
    isLogged: true,
  };
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(deleteuser(LogoutUser));
    setShowUserToggle(false); // Close user dropdown on logout
  };

  // Effect to close dropdown when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShownav(false);
        setShowUserToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Quicky
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShownav(!shownav)}
          >
            {shownav ? (
              <i className="fa-solid fa-xmark navbaar-icon"></i>
            ) : (
              <i className="fa-solid fa-bars-staggered navbaar-icon"></i>
            )}
          </button>
          <div className={`collapse navbar-collapse ${shownav ? "show" : ""}`}>
            <ul className="ul-navbar navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => setShownav(false)} // Close dropdown on link click
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  onClick={() => setShownav(false)} // Close dropdown on link click
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={() => setShownav(false)} // Close dropdown on link click
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={() => setShownav(false)} // Close dropdown on link click
                >
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
                <NavLink to={USER.isLogged ? "/carts" : "/login"} onClick={() => setShownav(false)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <span className="number-shopping">{numberOfItems.length}</span>
              </div>
              <div className="heart-cart ms-2 mb-1">
                <NavLink to={USER.isLogged ? "/fav" : "/login"} onClick={() => setShownav(false)}>
                  <i className="fa-solid fa-heart"></i>
                </NavLink>
                <span className="heart-shopping">{numberOfFavs.length}</span>
              </div>
              {USER.isLogged && (
                <div className="user-menu">
                  <div className="user-icon">
                    <i
                      className="fa-solid fa-user ms-4 mb-1"
                      onClick={() => setShowUserToggle(!showUserToggle)}
                    ></i>
                  </div>
                  {showUserToggle && (
                    <div className="dropdown-content base-color">
                      <a className="text-center">{USER.name}</a>
                      <NavLink
                        to="/login"
                        className="btn btn-danger p-2 my-2 mx-1"
                        onClick={() => {
                          logout();
                          setShownav(false); // Close dropdown on logout
                        }}
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
