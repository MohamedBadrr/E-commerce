/** @format */

import React from "react";
import "./Products.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
const Products = () => {
  const [data, setData] = useState({
    results: [],
    err: "",
  });
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await axios
        .get("https://fakestoreapi.com/products")
        .then((resp) => {
          setData({ ...data, results: resp.data });
          setFilter(resp.data);
          setLoading(false);
        })
        .catch((err) => {
          setData({ ...data, err: err.message });
        });
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <h1 className="loading">
        <i className="fa-solid fa-rotate-right fa-spin-pulse base-color"></i>
      </h1>
    );
  };

  const filterProduct = (category) => {
    const updatedList = data.results.filter(
      (product) => product.category === category
    );
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="product-list">
          {filter
            .sort(() => Math.random() - 0.5)
            .map((product, index) => (
              <div
                key={index}
                className="card product "
                style={{ width: "18rem" }}
              >
                <div className="imageIcons">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="overlay">
                    <i className="fa-solid fa-heart"></i>
                    <NavLink
                      to={`/productdetails/${product.id}/${product.category}`}
                      className=""
                    >
                      <i className="fa-regular fa-eye"></i>
                    </NavLink>
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
                <div className="card-body p-3">
                  <h4 className="product-name">
                    {product.title.substring(0, 11)}
                  </h4>
                  <div className="prices">
                    <h5 className="price">
                      {" "}
                      <span className="base-color">Price :</span>{" "}
                      {product.price}$
                    </h5>
                    <p className="lastprice">{product.price + 150}$</p>
                  </div>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <div className="add-show">
                    <NavLink
                      to={`/productdetails/${product.id}/${product.category}`}
                      className="default-btn show-btn"
                    >
                      Show Details
                    </NavLink>
                    <span
                      className="add-to-cart"
                      onClick={() => addProduct(product)}
                    >
                      Add to cart <i className="fa-solid fa-cart-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container poducts-all">
        <div className="products-title">
          <p>Our Products</p>
          <h1>Our Products Collections</h1>
          <div className="products-buttons mt-2 mb-5">
            <button
              className="default2-btn mx-3 my-2"
              onClick={() => {
                setFilter(data.results);
              }}
            >
              All Products
            </button>
            <button
              className="default2-btn mx-3 my-2"
              onClick={() => {
                filterProduct("men's clothing");
              }}
            >
              Men's Clothing
            </button>
            <button
              className="default2-btn mx-3 my-2"
              onClick={() => {
                filterProduct("women's clothing");
              }}
            >
              Women's Clothing
            </button>
            <button
              className="default2-btn mx-3 my-2"
              onClick={() => {
                filterProduct("jewelery");
              }}
            >
              Jewelery
            </button>
            <button
              className="default2-btn mx-3 my-2"
              onClick={() => {
                filterProduct("electronics");
              }}
            >
              Electronics
            </button>
          </div>
        </div>
        <div className="product-list-or-loading">
          {loading ? (
            <Loading />
          ) : (
            <div className="my-1">
              <ShowProducts />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
