/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { favItem } from "../../features/fav/favSlice";

const ProductDetails = () => {
  const { id, cat } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState({
    results: [],
    err: "",
  });
  const [relatedLoading, setRelatedLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  const addFav = (product) => {
    dispatch(favItem(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    const fetchRelatedProducts = async () => {
      if (cat) {
        setRelatedLoading(true);
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${cat}`
          );
          setRelatedProducts({ results: response.data, err: "" });
          setRelatedLoading(false);
        } catch (error) {
          console.error("Error fetching related products:", error);
          setRelatedProducts({ results: [], err: error.message });
          setRelatedLoading(false);
        }
      }
    };

    fetchProduct();
    fetchRelatedProducts();
  }, [id, cat]);

  const ShowProduct = () => {
    return (
      <>
        <div className="Product-container">
          <div className="col-md-5 mx-5 image-product ">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6 pe-5 text-product">
            <h3 className="text-uppercase text-black-50 product-category mb-3">
              {product.category}
            </h3>
            <h1 className="display-5 product-title">{product.title}</h1>
            <p className="rating-product">
              <span>Rating :</span> <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
            <h3 className="displa-6 fw-bold my-4">
              Price : <span className="base-color">{product.price} $</span>
            </h3>
            <p className="descriptionProduct">{product.description}</p>
            <div className="buttons my-4">
              <button
                className="default2-btn me-3 details-add-button"
                onClick={() => {
                  addFav(product);
                }}
              >
                Add to Favorites
              </button>
              <button
                className="default-btn"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="Product-details-all">
      <div className="container">
        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            <>
              <ShowProduct />
              <div className="products-title my-5">
                <p className="mt-5">Related Products</p>
                <h1>Some of {product.category} Products</h1>
                {!relatedLoading ? (
                  <div className="product-list">
                    {relatedProducts.results.map((product, index) => (
                      <div
                        className="card product"
                        style={{ width: "18rem" }}
                        key={index}
                      >
                        <div className="imageIcons">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.title}
                          />
                          <div className="overlay">
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-regular fa-eye"></i>
                            <i className="fa-solid fa-cart-plus"></i>
                          </div>
                        </div>
                        <div className="card-body p-3">
                          <h4 className="product-name">
                            {product.title.substring(0, 11)}
                          </h4>
                          <div className="prices">
                            <h5 className="price">
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
                            <span className="add-to-cart">
                              Add to cart
                              <i className="fa-solid fa-cart-plus"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Loading />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
